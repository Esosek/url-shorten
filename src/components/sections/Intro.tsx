import workingImg from '/src/assets/images/illustration-working.svg';
import Link from '../UI/Link';

export default function Intro() {
  return (
    <section id="intro">
      <div className="max-w-5xl mx-auto grid items-center justify-start px-6 mb-32 gap-12 md:grid-cols-2 md:mt-6">
        <img
          src={workingImg.src}
          alt="Illustration of working individual"
          className="w-[150%] max-w-none sm:w-3/4 sm:mx-auto md:w-[150%] md:order-1"
        />
        <div className="grid ">
          <h1 className="text-4xl font-bold text-neutral-900 my-2 md:text-6xl md:leading-tight">
            More than just shorter links
          </h1>
          <p className="mb-8">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Link
            cssClass="justify-self-center md:justify-self-start"
            isPrimary={true}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
