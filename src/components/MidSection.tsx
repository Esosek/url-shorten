import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../assets/images/icon-detailed-records.svg';
import customizableIcon from '../assets/images/icon-fully-customizable.svg';

import FeatureCard from './FeatureCard';
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
        <ul className="flex relative gap-8 mt-20">
          <hr className="absolute top-1/2 h-2 w-3/4 bg-cyan-500 roudned-full" />
          <FeatureCard
            iconSrc={brandRecognitionIcon.src}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
          <FeatureCard
            iconSrc={detailedRecordsIcon.src}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            extraCss="translate-y-10"
          />
          <FeatureCard
            iconSrc={customizableIcon.src}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            extraCss="translate-y-20"
          />
        </ul>
        <div className="h-56"></div>
      </div>
    </section>
  );
}
