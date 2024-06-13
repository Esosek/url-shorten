import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <header className="flex justify-between gap-8 py-8 md:py-10">
      <a href="/">
        <img src={logo.src} alt="Shortly logo" />
      </a>
      <Navbar />
    </header>
  );
}
