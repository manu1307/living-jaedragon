import { cartData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import ItemCard from "./ItemCard";
import { numberToKorean } from "@/utils/numberToKorean";
import DividendCard from "./DividendCard";

function CardWrapper() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 content-center ">
      
      {cartData.map((item, i) => {
        return (
          <div key={i}>
            <ItemCard
              id={i}
              imageUrl={item.imageUrl}
              item={item.item}
              price={item.price}
            />
          </div>
        );
      })}
      <DividendCard />
    </div>
  );
}

export default CardWrapper;
