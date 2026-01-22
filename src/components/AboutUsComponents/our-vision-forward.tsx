import React from "react";

const OurVisionForward = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Our Vision Forward
        </h2>
      </div>

      <article className="text-center bg-[#FFF9F9] md:px-4 px-2 py-8 rounded-lg border-lightPink border text-sm flex flex-col gap-y-2">
        <p className="lg:w-[70%] md:w-[85%] w-full mx-auto">
          StreetOps envisions Nigerian teams collaborating seamlessly, measuring
          connection alongside output, with social productivity as the norm.
          Sustainable practices reduce waste through retention, digital
          operations, and ethical partnerships.
        </p>
      </article>
    </section>
  );
};

export default OurVisionForward;
