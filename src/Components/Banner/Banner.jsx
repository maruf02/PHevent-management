import React from "react";

const Banner = () => {
  return (
    <div className="py-10 w-full">
      <div
        className="hero h-[500px] "
        style={{
          backgroundImage: "url(https://i.ibb.co/RDrfYNJ/Workshop-Events.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white">Welcome to</h1>
            <h1 className="mb-5 text-5xl font-bold text-white">
              Educational and Training Events
            </h1>
            <p className="mb-5 text-white text-lg">
              Unlock your potential with Educational and Training Events that
              provide practical skills and knowledge on a specific topic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
