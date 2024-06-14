import workingImg from '../assets/images/illustration-working.svg';
import Link from './UI/Link';

export default function Intro() {
  return (
    <section id="intro" className="px-6">
      <div className="max-w-5xl mx-auto grid items-center justify-start my-6 gap-12 md:grid-cols-2">
        <div className="grid">
          <h1 className="text-6xl font-bold text-neutral-900 my-2 leading-tight">
            More than just shorter link
          </h1>
          <p className="mb-8">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Link isPrimary={true}>Get Started</Link>
        </div>
        <img
          src={workingImg.src}
          alt="Illustration of working individual"
          className="w-[150%] max-w-none"
        />
      </div>
    </section>
  );
}
