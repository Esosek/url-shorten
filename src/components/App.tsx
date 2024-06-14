import Header from './Header';
import Intro from './Intro';
import MidSection from './MidSection';

export default function App() {
  return (
    <div className="text-center text-lg text-neutral-500 overflow-x-clip md:text-start">
      <Header />
      <main>
        <Intro />
        <MidSection />
      </main>
    </div>
  );
}
