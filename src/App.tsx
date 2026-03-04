import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <main>
        <Hero />
        <Cases />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
