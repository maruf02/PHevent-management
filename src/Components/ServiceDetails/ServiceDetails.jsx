import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  // console.log(card.title);
  const { title, img, price, duration, long_desc } = card;
  return (
    <div className="container mx-auto text-black flex flex-col items-center ">
      <img src={img} alt="" className="w-3/4 lg:h-[400px]" />
      <h2 className="text-5xl font-bold  pt-10 underline">Title: {title}</h2>
      <h2 className="text-3xl pt-5">Price: ${price}</h2>
      <h2 className="text-3xl pt-5">Duration: {duration}</h2>
      <p className="text-lg py-5 text-justify">
        <span className="text-2xl font-bold text-center">About Event: </span>
        {long_desc}
      </p>
    </div>
  );
};

export default ServiceDetails;
