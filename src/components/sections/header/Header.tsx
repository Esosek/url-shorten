import Logo from '../../UI/Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky bg-white/80 top-0 z-50 backdrop-blur-[8px]">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-8 py-8 px-6 md:py-10">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
