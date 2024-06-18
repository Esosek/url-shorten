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
  addUrl: (link: string) => void;
};

const URLHistoryContext = createContext<URLHistoryContextType>({
  urlHistory: [],
  addUrl: () => {},
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

  function addUrl(link: string) {
    if (isLinkDuplicate(link)) return;

    setUrlHistory((prevHistory) => {
      const updatedHistory = [
        ...prevHistory,
        {
          submitted: link,
          shortened: `https://link.cz/${prevHistory.length + 1}`,
        },
      ];
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    localStorage.setItem;
  }

  function isLinkDuplicate(link: string) {
    const existingDuplicates = urlHistory.filter(
      (url) => url.submitted === link
    );
    return existingDuplicates.length > 0;
  }
  return (
    <URLHistoryContext.Provider value={{ urlHistory, addUrl }}>
      {children}
    </URLHistoryContext.Provider>
  );
}
export default URLHistoryContext;
