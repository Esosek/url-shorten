import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

type UrlPair = {
  submitted: string;
  shortened: string;
};

type URLHistoryContextType = {
  urlHistory: UrlPair[];
  addUrl: (link: string) => Promise<void>;
};

const URLHistoryContext = createContext<URLHistoryContextType>({
  urlHistory: [],
  addUrl: async () => {},
});

export function URLHistoryContextProvider({ children }: PropsWithChildren) {
  const HISTORY_KEY = 'url_history';
  const [urlHistory, setUrlHistory] = useState<UrlPair[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem(HISTORY_KEY);
    if (storedHistory) {
      setUrlHistory(JSON.parse(storedHistory));
    }
  }, []);

  async function addUrl(link: string) {
    if (isLinkDuplicate(link)) return;
    const shortenedLink = await shortenLink(link);
    if (shortenedLink === null) return;

    setUrlHistory((prevHistory) => {
      const updatedHistory = [
        {
          submitted: link,
          shortened: shortenedLink,
        },
        ...prevHistory,
      ];
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    localStorage.setItem;
    return;
  }

  function isLinkDuplicate(link: string) {
    const existingDuplicates = urlHistory.filter(
      (url) => url.submitted === link
    );
    return existingDuplicates.length > 0;
  }

  async function shortenLink(link: string) {
    const url = `/api?url=${link}`;
    try {
      const response = await fetch(url);
      const data = await response.text();
      return data;
    } catch (error) {
      return null;
    }
  }
  return (
    <URLHistoryContext.Provider value={{ urlHistory, addUrl }}>
      {children}
    </URLHistoryContext.Provider>
  );
}
export default URLHistoryContext;
