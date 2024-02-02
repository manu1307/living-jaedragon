"use client";

import { totalAssetState } from "@/app/recoilContextProvider";

import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

function DividendCard() {
  const dividend = Intl.NumberFormat("ko-KR").format(116700000000);
  const [asset, setAsset] = useRecoilState<number>(totalAssetState);
  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 rounded-md bg-white">
      <div className="relative w-64 h-32 rounded-lg">
        <Image
          src={"/items/samsung.png"}
          fill={true}
          alt="samsung"
          sizes="100%"
          className="rounded-xl object-contain"
        />
      </div>
      <div className="font-bold text-2xl break-keep text-center my-2 ">
        삼전 배당금
      </div>
      <div className="text-lg font-normal">{dividend} 원</div>

      <button
        className="px-4 py-2 mt-4 w-1/4  text-white bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md"
        onClick={() => {
          alert("[삼성증권] 이*용님 \n 배당금이 입금되었습니다!");
          setAsset(asset + 116700000000);
        }}
      >
        받기
      </button>
    </div>
  );
}

export default DividendCard;
