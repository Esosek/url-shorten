import UrlInput from './UrlInput';

export default function MidSection() {
  return (
    <section className="bg-neutral-100 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <UrlInput />
        <h2 className="font-bold text-2xl my-6 text-neutral-900">
          Advanced Statistics
        </h2>
        <p className="max-w-lg mx-auto">
          Track how your links are performing across the web with our advanced
          statisctics dashboard.
        </p>
        <div className="h-56"></div>
      </div>
    </section>
  );
}
