import { ReactNode } from "react";

export interface BrowserContextProps {
  isBrowser: boolean;
}

export interface BrowserProviderProps {
  children: ReactNode;
}
