import React from "react";
import { Calendar, Headset, ArrowRight } from "lucide-react";

const CompactChoiceSection = () => {
  return (
    <div className="bg-white font-sans flex flex-col items-center justify-center p-4">
      {/* Header Section - More Compact */}
      {/* <img src="dash.png" alt="" /> */}
      <div className="text-center mb-8 relative z-10">
        <span className="text-[9px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mb-2 inline-block">
          Professional Development
        </span>
        <h1 className="text-3xl font-semibold text-[#4a1d1d] mb-2 leading-tight">
          Choose Your Path Forward
        </h1>
        <p className="text-gray-600 text-sm max-w-xs mx-auto leading-snug">
          Whether you're ready to dive in or want to explore your options, we're
          here to support your journey.
        </p>
      </div>

      {/* Cards Container - Reduced Width */}
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl w-full">
        {/* Card 1 */}
        <div className="bg-[#fff9f9] rounded-[30px] p-6 flex flex-col items-center text-center border border-pink-50/50">
          <div className="w-12 h-12 bg-[#ffb3b3] rounded-full flex items-center justify-center mb-4">
            <Calendar className="text-white w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-[#333] mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 text-xs mb-6 leading-normal">
            Book your personalized training session and begin your
            transformation journey today.
          </p>
          <button className="mt-auto bg-[#6d413c] text-white text-xs px-5 py-2 rounded-full flex items-center gap-2 transition-transform active:scale-95">
            View training calendar
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#fff9f9] rounded-[30px] p-6 flex flex-col items-center text-center border border-pink-50/50">
          <div className="w-12 h-12 bg-[#ffb3b3] rounded-full flex items-center justify-center mb-4">
            <Headset className="text-white w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-[#333] mb-2">
            Want Something Custom?
          </h2>
          <p className="text-gray-500 text-xs mb-6 leading-normal">
            Schedule a discovery call to discuss your unique goals and create a
            tailored plan.
          </p>
          <button className="mt-auto bg-[#6d413c] text-white text-xs px-5 py-2 rounded-full flex items-center gap-2 transition-transform active:scale-95">
            Book discovery call
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompactChoiceSection;
