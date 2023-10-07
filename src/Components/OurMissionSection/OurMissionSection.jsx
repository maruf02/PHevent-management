import React from "react";

const OurMissionSection = () => {
  return (
    <div className="py-10 border">
      <div className="text-center">
        <h2 className="text-5xl text-black underline"> our mission </h2>
        <h2 className="text-black pt-5">
          our mission is simple yet profound: to facilitate learning and
          development journeys that fuel personal and professional growth. We
          believe that education is the cornerstone of progress, and we are
          committed to creating dynamic, interactive, and impactful events that
          drive positive change
        </h2>
      </div>
      <div>
        <h2 className="text-black text-4xl underline pt-10">Why Choose Us:</h2>
        <div className="py-10 grid grid-cols-4 gap-4">
          <div className="card  bg-green-600 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">Quality Assurance!</h2>
              <p className="text-lg text-justify">
                We are committed to delivering events of the highest quality,
                consistently meeting and exceeding industry standards.
              </p>
            </div>
          </div>
          <div className="card  bg-green-600 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">Network Building!</h2>
              <p className="text-lg text-justify">
                Our events offer ample networking opportunities, allowing
                participants to connect with peers, experts, and potential
                collaborators.
              </p>
            </div>
          </div>
          <div className="card  bg-green-600 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">Impact!</h2>
              <p className="text-lg text-justify">
                Many individuals and organizations have experienced significant
                growth and transformation through our events. We measure our
                success by the positive outcomes of our participants.
              </p>
            </div>
          </div>
          <div className="card  bg-green-600 text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl">Engagement!</h2>
              <p className="text-lg text-justify">
                Our events are designed to engage participants actively,
                promoting retention and practical application of knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;
