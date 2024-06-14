import Logo from '../UI/Logo';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12">
      <div className="px-6 max-w-5xl mx-auto">
        <Logo fillClass="fill-neutral-100" />
      </div>
    </footer>
  );
}
