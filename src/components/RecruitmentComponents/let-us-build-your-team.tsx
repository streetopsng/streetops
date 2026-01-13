import React from "react";
import RecruitmentForm from "./recruitment-form";

const LetUsBuildYourTeam = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="uppercase tracking-widest bizmo-font text-[9px] font-bold bg-[#FEEEE3] text-[#EB5819] px-2 py-0.5 rounded-full">
          PRICING
        </span>
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          <span className="font-serif">7</span> Recruitment Solutions For Every
          Hiring Need
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Every package includes culture fit assessment and behavioural science.
        </p>
        <p className="opacity-80 text-sm italic py-4">
          All pricing customized based on your needs.
        </p>
      </div>

      <RecruitmentForm />
    </section>
  );
};

export default LetUsBuildYourTeam;
