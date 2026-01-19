import React from "react";

const OurBrandStory = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Our Brand Story
        </h2>
      </div>

      <article className="text-center bg-[#FFF9F9] md:px-4 lg:px-2 py-8 rounded-lg border-lightPink border text-sm flex flex-col gap-y-2">
        <p>
          StreetOps is a social productivity company that transforms how
          Nigerian businesses integrate teams. Founders shared a common
          frustration:
        </p>
        <p className="font-semibold">
          “Talented teams underperformed due to disconnection, not lack of
          skills or tools.”
        </p>
        <p>
          The solution lies in addressing the social problem - creating
          belonging to unlock productivity.
        </p>
      </article>
    </section>
  );
};

export default OurBrandStory;
