"use client";
import React from "react";

function Share() {
  return (
    <div
      className="flex justify-center items-center w-full h-12 md:my-8 my-4 text-white bg-gradient-to-t from-[#1428A0] to-[#2940c3] rounded-md cursor-pointer"
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText("https://shopping-jaedragon.vercel.app/")
            .then(() =>
              alert(
                "링크가 복사되었습니다. 붙여넣기로 카드를 다른 사람한테도 주세요."
              )
            )
            .catch(() => alert("링크 복사에 실패했습니다."));
        }
      }}
    >
      카드 다른 사람한테도 주기
    </div>
  );
}

export default Share;
