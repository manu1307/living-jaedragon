"use client";

import { totalAssetState } from "@/app/recoilContextProvider";
import { useRecoilValue } from "recoil";

function TotalAsset() {
  const totalAsset = useRecoilValue(totalAssetState);

  return (
    <div className="w-full text-center bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md sticky top-4 z-10 py-2 my-2">
      <div className="font-normal text-white text-lg">잔고</div>
      <div className="font-normal text-white text-md">
        {Intl.NumberFormat("ko-KR").format(totalAsset)}
      </div>
    </div>
  );
}

export default TotalAsset;
