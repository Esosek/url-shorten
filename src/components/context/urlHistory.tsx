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
    checkDuplicate(link);
    const shortenedLink = await shortenLink(link);

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

  function checkDuplicate(link: string) {
    const existingDuplicates = urlHistory.filter(
      (url) => url.submitted === link
    );
    if (existingDuplicates.length > 0) {
      throw new Error('Link was already shortened.');
    }
  }

  async function shortenLink(link: string) {
    const url = `/api?url=${link}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.body;
  }
  return (
    <URLHistoryContext.Provider value={{ urlHistory, addUrl }}>
      {children}
    </URLHistoryContext.Provider>
  );
}
export default URLHistoryContext;
