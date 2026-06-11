import Header from './sections/Header';
import Hero from './sections/Hero';
import Teoria from './sections/Teoria';
import Mundial from './sections/Mundial';
import Colombia from './sections/Colombia';
import Vertimientos from './sections/Vertimientos';
import Decreto from './sections/Decreto';
import ValleCauca from './sections/ValleCauca';
import Cali from './sections/Cali';
import Resumen from './sections/Resumen';
import PuntosClave from './sections/PuntosClave';
import Referencias from './sections/Referencias';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="pt-24">
          <Teoria />
        </div>
        <Mundial />
        <Colombia />
        <Vertimientos />
        <Decreto />
        <ValleCauca />
        <Cali />
        <Resumen />
        <PuntosClave />
        <Referencias />
      </main>
      <Footer />
    </div>
  );
}

export default App;
