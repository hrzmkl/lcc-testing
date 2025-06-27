import { create } from "zustand";

type AppStoreType = {
  bgColor: string;
  setBgColor: (color: string) => void;
  height: number;
  setHeight: (height: number) => void;
  openModalVideo: boolean;
  setOpenModalVideo: (bool: boolean) => void;
  usingImageKit: boolean;
  setUsingImageKit: (bool: boolean) => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
  bgColor: "#d8fc31",
  setBgColor: (color: string) => set({ bgColor: color }),
  height: 129,
  setHeight: (height: number) => set({ height }),
  openModalVideo: false,
  setOpenModalVideo: (bool: boolean) => set({ openModalVideo: bool }),
  usingImageKit: true,
  setUsingImageKit: (bool: boolean) => set({ usingImageKit: bool }),
}));
