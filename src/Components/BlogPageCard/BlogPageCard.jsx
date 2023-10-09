import React from "react";

const BlogPageCard = ({ card }) => {
  const { id, img, event_type, event_name, date, location, description } = card;
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl hover:border-green-600 hover:border-solid hover:border-4">
        <figure className="">
          <img src={img} alt="Card Picture" className="w-full h-64" />
        </figure>
        <div className="card-body ">
          <div className="h-44">
            <h2 className="text-2xl font-bold">{event_name}</h2>
            <h2 className="text-lg font-bold ">Type:- {event_type}</h2>
            <h2 className="card-title">Date:- {date}</h2>
            <h2 className="card-title">Location:- {location}</h2>
            <p className="text-xl">About:-{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageCard;
