import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';

const templates = [
    { name: 'pro-contractor', dir: '../demo-pro-contractor/dist' },
];

async function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function run() {
    const app = express();
    let currentStaticDir = null;

    // Middleware to dynamically serve the current template's dist folder
    app.use((req, res, next) => {
        if (currentStaticDir) {
            express.static(currentStaticDir)(req, res, next);
        } else {
            res.status(404).send('Template not loaded');
        }
    });

    // Catch-all removed for Express 5 compatibility

    const server = app.listen(5000, () => {
        console.log('Static server running on http://localhost:5000');
    });

    console.log("Launching headless browser...");
    const browser = await puppeteer.launch({ headless: 'new' });

    for (const t of templates) {
        currentStaticDir = path.resolve(process.cwd(), t.dir);
        console.log(`Serving and capturing ${t.name}...`);

        const page = await browser.newPage();

        try {
            // --- Desktop Screenshot ---
            await page.setViewport({ width: 1920, height: 1080 });
            await page.goto(`http://localhost:5000`, { waitUntil: 'networkidle0', timeout: 30000 }).catch(e => console.error(e));
            await delay(2000); // let animations settle
            await page.screenshot({ path: `public/images/cases/desktop-${t.name}.jpg`, type: 'jpeg', quality: 90 });
            console.log(`Saved desktop-${t.name}.jpg`);

            // --- Mobile Screenshot ---
            await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
            await page.reload({ waitUntil: 'networkidle0', timeout: 15000 });
            await delay(2000); // let animations settle
            await page.screenshot({ path: `public/images/cases/mobile-${t.name}.jpg`, type: 'jpeg', quality: 90 });
            console.log(`Saved mobile-${t.name}.jpg`);

        } catch (err) {
            console.error(`Error capturing ${t.name}:`, err.message);
        }

        await page.close();
    }

    await browser.close();
    server.close();
    console.log("All screenshots captured successfully.");
}

run().catch(console.error);
