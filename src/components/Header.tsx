import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <header className="sticky bg-white top-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-8 p-8 md:py-10">
        <a href="/">
          <img src={logo.src} alt="Shortly logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
}
