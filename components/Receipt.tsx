"use client";

import { ReceiptState } from "@/app/recoilContextProvider";
import { cartData } from "@/utils/data";
import { numberToKorean } from "@/utils/numberToKorean";
import { useRecoilValue } from "recoil";

function Receipt() {
  const receiptData = useRecoilValue(ReceiptState);
  //   console.log(receiptData);
  const sum = receiptData.reduce((acc, cur) => acc + cur, 0);
  let total = 0;
  for (let i = 0; i < receiptData.length; i++) {
    total += receiptData[i] * cartData[i].price;
  }
  return (
    <>
      {sum > 0 && (
        <>
          <div className="py-4 px-8 border-2 border-gray-300 rounded-md bg-white my-4 flex flex-col items-center">
            <div className="font-bold text-3xl my-4">영수증</div>
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
          </div>
        </>
      )}
    </>
  );
}

export default Receipt;
