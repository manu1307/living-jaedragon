"use client";
import { ReceiptState, totalAssetState } from "@/app/recoilContextProvider";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

type ItemCardProps = {
  id: number;
  imageUrl: string;
  item: string;
  price: number;
};
function ItemCard({ id, imageUrl, item, price }: ItemCardProps) {
  const formattedPrice = Intl.NumberFormat("ko-KR").format(price);
  const [count, setCount] = useState<number>(0);

  const [asset, setAsset] = useRecoilState<number>(totalAssetState);
  const [receipt, setReceipt] = useRecoilState(ReceiptState);
  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 rounded-md bg-white">
      <div className="relative w-64 h-32 rounded-lg">
        <Image
          src={imageUrl}
          fill={true}
          alt={item}
          className="rounded-md object-contain"
        />
      </div>
      <div className="font-bold text-2xl break-keep text-center my-2 ">
        {item}
      </div>
      <div className="text-lg font-normal">{formattedPrice} 원</div>
      <div className="flex justify-around w-full">
        <button
          className="px-4 py-2 mt-4 w-1/4  text-white bg-gradient-to-t from-[#ff7878] to-[#ff7575] rounded-md"
          onClick={() => {
            if (count > 0) {
              setAsset(asset + price);
              setCount(count - 1);
              setReceipt((prev) => {
                const temp = [...prev];
                temp[id] -= 1;
                return temp;
              });
            } else {
              alert("이미 다 팔았습니다!");
            }
          }}
        >
          팔기
        </button>
        <div className="px-4 py-2 border-2 font-semibold text-xl border-gray-200 rounded-md w-1/3 text-center mt-4">
          {count}
        </div>
        <button
          className="px-4 py-2 mt-4 w-1/4  text-white bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md"
          onClick={() => {
            if (asset >= price) {
              setAsset(asset - price);
              setCount(count + 1);
              setReceipt((prev) => {
                const temp = [...prev];
                temp[id] += 1;
                return temp;
              });
            } else {
              alert("잔액이 부족합니다.");
            }
          }}
        >
          구매
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
