import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  console.log(card.title);
  const { title } = card;
  return (
    <div>
      <h2>This is service details page:{title}</h2>
    </div>
  );
};

export default ServiceDetails;
