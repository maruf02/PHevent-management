import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const ServicesSection = () => {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    fetch("ApiData.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="text-center text-5xl ">
        <h2 className="text-black font-bold">Our Services</h2>
        <p className="border-b-4 w-1/4 relative left-[38%] mt-3 border-black"></p>
      </div>
      <div className="w-full h-full border mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allCards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
