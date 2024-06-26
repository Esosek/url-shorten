import { useContext, useState } from 'react';
import styles from './UrlHistory.module.css';
import Button from '../../UI/Button';
import URLHistoryContext from '../../context/urlHistory';

export default function UrlHistory() {
  const urlHistory = useContext(URLHistoryContext).urlHistory;
  const [copiedLink, setCopiedLink] = useState<null | string>(null);

  function handleLinkCopy(link: string) {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
  }

  return (
    <ul className="flex flex-col gap-4 mb-24">
      {urlHistory.map((url, index) => {
        return (
          <li
            key={index}
            className="relative grid grid-cols-1 grid-rows-3 gap-2 text-sm items-center justify-items-start text-neutral-900 bg-white px-4 md:px-6 pt-2 pb-4 text-left shadow-sm rounded-md md:grid-rows-1 md:gap-8 md:grid-cols-[1fr_auto_auto] md:text-base md:py-4"
          >
            <p
              className={`${styles.submittedUrl} overflow-ellipsis line-clamp-1 max-w-full`}
            >
              {url.submitted}
            </p>
            <a href={url.shortened} className="text-cyan-500 line-clamp-1">
              {url.shortened}
            </a>
            {copiedLink === url.shortened ? (
              <Button
                onClick={() => handleLinkCopy(url.shortened)}
                bgColor="bg-neutral-700"
                hoverBgColor="hover:bg-neutral-500"
                extraClasses="min-w-28"
              >
                Copied!
              </Button>
            ) : (
              <Button
                onClick={() => handleLinkCopy(url.shortened)}
                extraClasses="min-w-28"
              >
                Copy
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
