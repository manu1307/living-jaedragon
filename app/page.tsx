import CardWrapper from "@/components/CardWrapper";
import Receipt from "@/components/Receipt";
import Share from "@/components/Share";
import TotalAsset from "@/components/TotalAssset";
import Image from "next/image";
import NumberFormat from "react-number-format";

export default function Home() {
  return (
    <main className="container min-h-screen md:p-16 p-2 pt-8 m-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-3 mb-5 font-semibold text-2xl text-center">
          재드래곤의 카드가 <br />
          배송 완료 되었습니다
        </h2>
        <div className="relative w-32 h-32 bg-white rounded-full">
          <Image
            src={"/jaeDragon.png"}
            fill={true}
            sizes="100%"
            alt="jaeDragon"
            className="rounded-full"
          />
        </div>
        <h1 className="my-3 font-semibold text-2xl">재드래곤 몰래 쇼핑하기</h1>
      </div>

      <TotalAsset />
      <CardWrapper />
      <div id="receipt">
        <Receipt />
      </div>
      <Share />
    </main>
  );
}
