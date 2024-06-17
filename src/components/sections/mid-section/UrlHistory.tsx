import { useContext } from 'react';
import styles from './UrlHistory.module.css';
import Button from '../../UI/Button';
import URLHistoryContext from '../../context/urlHistory';

export default function UrlHistory() {
  const urlHistory = useContext(URLHistoryContext).urlHistory;

  return (
    <ul className="flex flex-col gap-4 mb-24">
      {urlHistory.map((url) => {
        return (
          <li className="relative grid grid-cols-1 grid-rows-3 gap-2 text-sm items-center justify-items-start text-neutral-900 bg-white px-4 md:px-6 pt-2 pb-4 text-left shadow-sm rounded-md md:grid-rows-1 md:gap-6 md:grid-cols-[3fr_1fr_auto] md:text-base md:py-4">
            <p
              className={`${styles.submittedUrl} overflow-ellipsis line-clamp-1 max-w-full`}
            >
              {url.submitted}
            </p>
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
