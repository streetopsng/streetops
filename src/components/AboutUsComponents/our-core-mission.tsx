import React from "react";

const OurCoreMission = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Our Core Mission
        </h2>
      </div>

      <article className="text-center bg-[#FFF9F9] md:px-4 lg:px-2 py-8 rounded-lg border-lightPink border text-sm flex flex-col gap-y-2">
        <p>
          StreetOps creates social productivity in every team touched, solving
          the expensive issue of disconnected employees. The platform tracks
          engagement, connection, and contribution, while expert services handle
          the full employee lifecycle from staff mapping to team bonding. This
          turns strangers into productive teammates.
        </p>
      </article>
    </section>
  );
};

export default OurCoreMission;
