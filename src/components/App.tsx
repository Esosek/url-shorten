import Header from './Header';
import Intro from './Intro';
import UrlInput from './UrlInput';

export default function App() {
  return (
    <div className="text-center text-lg text-neutral-500 overflow-x-clip md:text-start">
      <Header />
      <Intro />
      <section className="bg-neutral-100">
        <div className="max-w-5xl mx-auto px-8">
          <UrlInput />
        </div>
        <div id="empty-space-test" className="h-56"></div>
      </section>
    </div>
  );
}
