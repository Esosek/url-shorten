import Button from '../../UI/Button';

export default function UrlHistory() {
  const PAST_URL = [
    {
      submitted: 'https://www.frontendmentor.io',
      shortened: 'https://rel.ink/k4lKyk',
    },
    {
      submitted: 'https://twitter.com/frontendmentor',
      shortened: 'https://rel.ink/gxOXp9',
    },
    {
      submitted: 'https://www.linkedin.com/company/frontend-mentor',
      shortened: 'https://rel.ink/gob3X9',
    },
  ];
  return (
    <ul className="flex flex-col gap-4">
      {PAST_URL.map((url) => {
        return (
          <li className="grid grid-cols-[3fr_1fr_auto] items-center justify-items-start gap-6 text-neutral-900 bg-white px-6 py-4 text-left shadow-sm">
            <p className="overflow-ellipsis line-clamp-1">{url.submitted}</p>
            <a href={url.shortened} className="text-cyan-500">
              {url.shortened}
            </a>
            <Button>Copy</Button>
          </li>
        );
      })}
    </ul>
  );
}
