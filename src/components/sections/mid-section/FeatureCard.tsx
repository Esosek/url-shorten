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
      className={`flex flex-col items-center bg-white z-10 px-8 pb-8 rounded-md md:text-start md:items-start ${extraCss}`}
    >
      <div className="flex items-center justify-center relative -top-10 rounded-full bg-violet p-4 size-20">
        <img src={iconSrc} alt={`Icon of ${title}`} />
      </div>

      <h3 className="text-xl font-bold text-neutral-900 mb-4">{title}</h3>
      <p className="text-base">{description}</p>
    </li>
  );
}
