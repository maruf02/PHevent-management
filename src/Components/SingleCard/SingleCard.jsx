import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { id, title, img, price, short_desc } = card;
  // console.log(title);
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl hover:border-green-600 hover:border-solid hover:border-4">
        <figure className="">
          <img src={img} alt="Card Picture" className="w-full h-64" />
        </figure>
        <div className="card-body ">
          <div className="h-40">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-title">Price- ${price}</h2>
            <p className="">{short_desc}</p>
          </div>
          <Link to={`/cardDetails/${id}`}>
            <div className="card-actions">
              <button className="btn btn-primary w-full">
                <span className="text-xl">See Details</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
