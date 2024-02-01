"use client";

import { totalAssetState } from "@/app/recoilContextProvider";
import { useRecoilValue } from "recoil";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Link from "next/link";
import AnimatedNumbers from "react-animated-numbers";

function TotalAsset() {
  const totalAsset = useRecoilValue(totalAssetState);

  return (
    <div className="w-full text-center bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md sticky top-4 z-10 py-2 my-2">
      <div className="relative">
        <div className="font-normal text-white text-lg">잔고</div>
        {/* <div className="font-normal text-white text-md">
          {Intl.NumberFormat("ko-KR").format(totalAsset)}
        </div> */}
        <div className="flex justify-center">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index / 60,
            })}
            animateToNumber={totalAsset}
            fontStyle={{
              fontSize: 16,
              fontWeight: "semibold",
              color: "white",
            }}
          />
        </div>
        <div className="absolute top-0 right-0">
          <div className="p-2 pr-4">
            <Link href="#receipt">
              <ReceiptLongIcon className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalAsset;
