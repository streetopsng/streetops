import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Aliko Dangote",
    role: "CEO, Founder",
    company: "Dangote Group",
    content: "This platform transformed how our team collaborates. We've seen a 40% increase in productivity and our project delivery times have improved dramatically.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aliko",
  },
  {
    name: "Femi Otedola",
    role: "Chairman",
    company: "First HoldCo PLC",
    content: "The results speak for themselves. Our customer satisfaction scores jumped by 35% within the first quarter. The support team is incredibly responsive.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Femi",
  },
  {
    name: "Folorunsho Alakija",
    role: "GMD",
    company: "Rose of Sharon Group",
    content: "We were skeptical at first, but the ROI became clear within weeks. Our team now saves 15+ hours per week on manual tasks. It's essential now.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Folorunsho",
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-10 px-4 bg-white font-sans">
      {/* Header Section - More Compact */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-black text-red-950 mb-3 tracking-tight">
          What Teams Say
        </h2>
        <p className="text-gray-500 text-sm leading-snug">
          Real experiences from teams who we have helped <br className="hidden md:block" /> transform their workflow.
        </p>
      </div>

      {/* Testimonial Cards Grid - Tighter Gaps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-[#FFF9F9] p-5 rounded-[24px] flex flex-col border border-red-50/50">
            {/* Smaller Quote Icon */}
            <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-400 text-xl font-serif">“</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              {t.content}
            </p>

            {/* Author Section - Scaled Down */}
            <div className="flex items-center gap-3 border-t border-red-100/60 pt-4">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-10 h-10 rounded-full bg-gray-200 grayscale"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-gray-800 text-sm truncate">{t.name}</span>
                <span className="text-[10px] text-gray-400 font-medium truncate">{t.role}</span>
                <span className="text-[10px] text-red-900 font-bold uppercase tracking-tighter truncate">
                  {t.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted Badge - Scaled Down */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm scale-90 md:scale-100">
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center border border-white">
                <Star className="w-3 h-3 text-red-400 fill-red-400" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-gray-600">Trusted by 200+ teams</span>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          </div>
        </div>
      </div>
      <img src="dash.png" alt="" />
    </section>
  );
}