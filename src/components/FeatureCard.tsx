type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  extraCss?: string;
};

export default function FeatureCard({
  title,
  description,
  iconSrc,
  extraCss,
}: FeatureCardProps) {
  return (
    <li
      className={`bg-white relative px-8 pb-8 rounded-md text-start ${extraCss}`}
    >
      <div className="flex items-center justify-center absolute -top-10 rounded-full bg-violet p-4 size-20">
        <img src={iconSrc} alt={`Icon of ${title}`} />
      </div>

      <h3 className="text-xl font-bold text-neutral-900 mt-16 mb-4">{title}</h3>
      <p className="text-base">{description}</p>
    </li>
  );
}
