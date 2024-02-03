"use client";

import { ReceiptState } from "@/app/recoilContextProvider";
import { cartData } from "@/utils/data";
import { numberToKorean } from "@/utils/numberToKorean";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { useRouter } from "next/navigation";

function ShoppingCart() {
  const router = useRouter();
  const receiptData = useRecoilValue(ReceiptState);

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const sum = receiptData.reduce((acc, cur) => acc + cur, 0);
  let total = 0;

  for (let i = 0; i < receiptData.length; i++) {
    total += receiptData[i] * cartData[i].price;
  }
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;

      const canvas = await html2canvas(div, { scale: 2 });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <>
      <div
        ref={divRef}
        className="py-4 px-8 border-2 border-gray-300 rounded-md bg-white my-4 flex justify-center w-full"
      >
        <div className="flex flex-col items-center md:w-[480px] w-full">
          <div className="font-bold text-3xl my-4">장바구니</div>
          {sum > 0 && (
            <>
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
              <div className="border-t-2 border-gray-500 my-4 py-4 w-full flex justify-between text-lg font-semibold">
                <div>총합:</div>
                <div className="text-blue-700">{numberToKorean(total)}</div>
              </div>
            </>
          )}
        </div>
      </div>
      {sum > 0 && (
        <button
          className="flex justify-center items-center w-full h-12 my-8 text-white bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md cursor-pointer"
          onClick={() => {
            alert("[삼성페이] 결제 중입니다...");
            router.replace("/receipt");
          }}
        >
          결제하기
        </button>
      )}
    </>
  );
}

export default ShoppingCart;
