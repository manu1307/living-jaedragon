"use client";

import { totalAssetState } from "@/app/recoilContextProvider";
import { useRecoilValue } from "recoil";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

function TotalAsset() {
  const totalAsset = useRecoilValue(totalAssetState);

  return (
    <div className="w-full text-center bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md sticky top-4 z-10 py-2 my-2">
      <div className="flex justify-between">
        <div className="md:w-20 w-8"></div>
        <div className="">
          <div className="font-normal text-white text-lg">잔고</div>
          <div className="font-semibold text-white md:text-xl text-md">
            {Intl.NumberFormat("ko-KR").format(totalAsset)}
          </div>
        </div>

        <div className="md:w-20 w-fit pr-2 flex justify-center items-center">
          <Link href="#receipt">
            <ShoppingCartIcon className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TotalAsset;
