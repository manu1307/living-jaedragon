import CardWrapper from "@/components/CardWrapper";
import Receipt from "@/components/Receipt";
import TotalAsset from "@/components/TotalAssset";
import Image from "next/image";
import NumberFormat from "react-number-format";

export default function Home() {
  return (
    <main className="container min-h-screen md:p-16 p-2 pt-8 m-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 bg-white rounded-full">
          <Image
            src={"/jaeDragon.png"}
            fill={true}
            alt="jaeDragon"
            className="rounded-full"
          />
        </div>
        <div className="my-3 font-semibold text-2xl">이재용 몰래 쇼핑하기</div>
      </div>

      <TotalAsset />
      <CardWrapper />
      <Receipt />
    </main>
  );
}
