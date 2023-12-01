import { FC, createContext, useEffect, useState } from "react";

import { BrowserContextProps, BrowserProviderProps } from "./types";

const BrowserContext = createContext({} as BrowserContextProps);

const BrowserProvider: FC<BrowserProviderProps> = ({ children }) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <BrowserContext.Provider value={{ isBrowser }}>
      {children}
    </BrowserContext.Provider>
  );
};

export { BrowserContext, BrowserProvider };
