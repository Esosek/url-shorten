import Header from './sections/header/Header';
import Intro from './sections/Intro';
import MidSection from './sections/mid-section/MidSection';
import BoostCTA from './sections/BoostCTA';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="text-center text-lg text-neutral-500 overflow-x-clip md:text-start">
      <Header />
      <main>
        <Intro />
        <MidSection />
        <BoostCTA />
      </main>
      <Footer />
    </div>
  );
}
