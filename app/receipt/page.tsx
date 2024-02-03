"use client";

import { ReceiptState, totalAssetState } from "@/app/recoilContextProvider";
import Share from "@/components/Share";
import { cartData } from "@/utils/data";
import { numberToKorean } from "@/utils/numberToKorean";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";

function Page() {
  const router = useRouter();
  const [receiptData, setReceiptData] = useRecoilState(ReceiptState);
  const [asset, setAsset] = useRecoilState(totalAssetState);

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const sum = receiptData.reduce((acc, cur) => acc + cur, 0);
  let total = 0;

  for (let i = 0; i < receiptData.length; i++) {
    total += receiptData[i] * cartData[i].price;
  }

  return (
    <>
      {mounted && (
        <main className="container min-h-screen md:p-16 p-2 pt-2 m-auto">
          <div className="py-4 px-8 border-2 border-gray-300 rounded-md bg-white my-4 flex justify-center w-full">
            <div className="flex flex-col items-center md:w-[480px] w-full">
              <div className="font-bold text-3xl my-4 text-center">영수증</div>
              <div className="w-full md:min-h-[calc(100vh-12rem)] min-h-[calc(100vh-15rem)] overflow-scroll scrollbar-hide">
                {sum > 0 && (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {receiptData.map((item, index) => {
                        if (item > 0) {
                          const name = cartData[index].item;
                          const amount = item;
                          const totalPrice = numberToKorean(
                            cartData[index].price * amount
                          );

                          return (
                            <div
                              className="flex w-full justify-between font-semibold text-lg"
                              key={index}
                            >
                              <div className="flex gap-4 w-1/2">
                                <div className="flex-1 break-keep">{name}</div>
                                <div>x{amount}</div>
                              </div>
                              <div className="text-blue-700">{totalPrice}</div>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="border-t-2 border-gray-500 my-4 py-4 w-full flex justify-between text-lg font-semibold">
                      <div>총합:</div>
                      <div className="text-blue-700">
                        {numberToKorean(total)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* {sum > 0 && (
            <button className="flex justify-center items-center w-full h-12 my-8 text-white bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md cursor-pointer">
              영수증 출력하기
            </button>
          )} */}
          <button
            className="flex justify-center items-center w-full h-12 my-8 text-white bg-gradient-to-t from-[#e86767] to-[#ff6767] rounded-md cursor-pointer"
            onClick={() => {
              setReceiptData(() => Array(cartData.length).fill(0));
              setAsset(12000000000000);
              router.replace("/");
            }}
          >
            좀 아쉬운데 쇼핑 다시할까?
          </button>
          <Share />
        </main>
      )}
    </>
  );
}

export default Page;
