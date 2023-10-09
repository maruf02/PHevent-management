import React from "react";

const AboutUsSection = () => {
  return (
    <div className="py-10 border">
      <div className="text-center">
        <h2 className="text-5xl text-black underline"> About us </h2>

        <h2 className="py-8 text-black">
          Welcome to PHevent, a leading provider of exceptional Educational and
          Training Events that inspire, empower, and transform lives. We are
          dedicated to delivering high-quality educational experiences that
          equip individuals and organizations with the knowledge, skills, and
          tools they need to thrive in an ever-evolving world.
        </h2>
      </div>
      <h2 className="text-black text-center md:text-left text-3xl underline pt-10">
        What Sets Us Apart:
      </h2>
      <div className="py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card  bg-blue-500 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Expertise!</h2>
            <p className="text-lg text-justify">
              With years of experience in event management, our team brings a
              wealth of knowledge and a passion for education to every project.
              We understand the unique challenges and opportunities in the
              educational and training space.
            </p>
          </div>
        </div>
        <div className="card  bg-blue-500 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Tailored Solutions!</h2>
            <p className="text-lg">
              We work closely with our clients to understand their specific
              needs and goals. Our events are customized to align with your
              objectives, ensuring maximum impact.
            </p>
          </div>
        </div>
        <div className="card  bg-blue-500 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Innovation!</h2>
            <p className="text-lg">
              In a rapidly changing world, we stay at the forefront of
              educational trends and technologies. We integrate innovative
              solutions to enhance the learning experience.
            </p>
          </div>
        </div>
        <div className="card  bg-blue-500 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Global Reach!</h2>
            <p className="text-lg">
              Our events are accessible to a global audience, fostering
              cross-cultural exchange and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
