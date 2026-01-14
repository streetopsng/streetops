import React from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    "How much customization is available for my event?",
    "Do you offer both onsite and virtual options?",
    "How far in advance should I book?",
    "What factors influence pricing?",
    "Can I make changes after booking?",
    "What if I need to cancel or reschedule?"
  ];

  return (
    <section className="py-16 bg-white px-4">
        {/* <img src="dash.png" alt="" /> */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4A0E0E] mb-4">Common Questions</h2>
        <p className="text-gray-500 text-sm">Find answers to frequently asked questions about our services and booking process.</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((q, i) => (
          <div key={i} className="group bg-[#FFF9F9] rounded-2xl border border-red-50/50 p-4 flex justify-between items-center cursor-pointer hover:border-red-200 transition-colors">
            <span className="text-sm font-semibold text-gray-700">{q}</span>
            <ChevronDown size={18} className="text-gray-400 group-hover:text-gray-600" />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm mb-4 font-medium font-sans">Still have questions? We're here to help.</p>
        <button className="bg-[#4A0E0E] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#2D0909] transition-all">
          Contact us
        </button>
      </div>
      <img src="dash.png" alt="" />
    </section>
  );
};