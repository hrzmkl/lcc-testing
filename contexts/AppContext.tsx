import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  bgColor: string;
  setBgColor: (color: string) => void;
  height: number,
  setHeight: (height: number) => void;
  openModalVideo: boolean,
  setOpenModalVideo: (bool: boolean) => void;
  usingImageKit: boolean;
  setUsingImageKit: (bool: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [bgColor, setBgColor] = useState<string>("#d8fc31");
  const [height, setHeight] = useState<number>(129);
  const [openModalVideo, setOpenModalVideo] = useState<boolean>(false);
  const [usingImageKit, setUsingImageKit] = useState<boolean>(true);
  return (
    <AppContext.Provider value={{ bgColor, setBgColor, height, setHeight, openModalVideo, setOpenModalVideo, usingImageKit, setUsingImageKit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
