"use client";

import { cartData } from "@/utils/data";
import { RecoilRoot, atom } from "recoil";
export const totalAssetState = atom({
  key: "totalAsset",
  default: 12000000000000,
});

type ReceiptType = {
  id: number;
  item: string;
  amount: number;
  price: number;
};
export const ReceiptState = atom<number[]>({
  key: "receipt",
  default: new Array(cartData.length).fill(0),
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
