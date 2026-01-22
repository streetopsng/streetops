import React from "react";

const OurKeyApproach = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Our Key Approach
        </h2>
      </div>

      <article className="text-center bg-[#FFF9F9] md:px-4 px-2 py-8 rounded-lg border-lightPink border text-sm flex flex-col gap-y-2">
        <p>
          The <span className="font-semibold">STREET</span> Framework defines
          ideal team traits:
        </p>
        <aside className="text-center">
          <p>
            <span className="font-semibold">S</span> - <span>Sharp</span>
          </p>
          <p>
            <span className="font-semibold">T</span> - <span>Tenacious</span>
          </p>
          <p>
            <span className="font-semibold">R</span> -{" "}
            <span>Reflective, Resourceful</span>
          </p>
          <p>
            <span className="font-semibold">E</span> - <span>Energetic</span>
          </p>
          <p>
            <span className="font-semibold">E</span> -{" "}
            <span> Entrepreneurial</span>
          </p>
          <p>
            <span className="font-semibold">T</span> - <span>Team-first</span>
          </p>
        </aside>
        <p>
          Services like Recruitment, Onboarding, Training, and Team Bonding make
          culture transferable and measurable, and scalable.
        </p>
      </article>
    </section>
  );
};

export default OurKeyApproach;
