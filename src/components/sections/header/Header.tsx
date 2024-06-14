import logo from '/src/assets/images/logo.svg';
import Navbar from './Navbar';

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <header className="sticky bg-white/80 top-0 z-50 backdrop-blur-[8px]">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-8 py-8 px-6 md:py-10">
        <a href="/">
          <img src={logo.src} alt="Shortly logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
}
