import React, { useEffect, useState } from "react";
import BlogPageCard from "../BlogPageCard/BlogPageCard";

const BlogPage = () => {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    fetch("BlogData.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="text-center text-5xl ">
        <h2 className="text-black font-bold">Recent BLog</h2>
        <p className="border-b-4 w-1/4 relative left-[38%] mt-3 border-black"></p>
        <p className="text-green-700 text-2xl py-4">
          These Event Help to Grow someone Career.
        </p>
      </div>
      <div className="w-full h-full  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allCards.map((card) => (
          <BlogPageCard key={card.id} card={card}></BlogPageCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
