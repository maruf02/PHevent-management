import React, { useEffect, useState } from "react";
import CareerPageCard from "../CareerPageCard/CareerPageCard";

const CareerPage = () => {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    fetch("CareerData.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="text-center text-5xl ">
        <h2 className="text-black font-bold">Career Services</h2>
        <p className="border-b-4 w-1/4 relative left-[38%] mt-3 border-black"></p>
        <p className="text-green-700 text-2xl py-4">
          These Event Help to Grow Your Career.
        </p>
      </div>
      <div className="w-full h-full border mt-5 grid grid-cols-3 gap-10">
        {allCards.map((card) => (
          <CareerPageCard key={card.id} card={card}></CareerPageCard>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
