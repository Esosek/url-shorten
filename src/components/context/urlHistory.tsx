import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

const defaultValue: UrlPair[] = [
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

export type UrlPair = {
  submitted: string;
  shortened: string;
};

type URLHistoryContextType = {
  urlHistory: UrlPair[];
  setUrlHistory: Dispatch<SetStateAction<UrlPair[]>>;
};

const URLHistoryContext = createContext<URLHistoryContextType>({
  urlHistory: defaultValue,
  setUrlHistory: () => {},
});

export function URLHistoryContextProvider({ children }: PropsWithChildren) {
  const [urlHistory, setUrlHistory] = useState(defaultValue);
  return (
    <URLHistoryContext.Provider value={{ urlHistory, setUrlHistory }}>
      {children}
    </URLHistoryContext.Provider>
  );
}
export default URLHistoryContext;
