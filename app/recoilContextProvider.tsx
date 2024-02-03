"use client";

import { cartData } from "@/utils/data";
import { RecoilRoot, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const totalAssetState = atom({
  key: "totalAsset",
  default: 12000000000000,
});

export const ReceiptState = atom<number[]>({
  key: "receipt",
  default: new Array(cartData.length).fill(0),
  effects_UNSTABLE: [persistAtom],
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
