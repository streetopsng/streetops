import React from 'react';
import { Zap, Clock, Calendar, Sun, Settings2, ArrowRight } from 'lucide-react';

const formats = [
  {
    title: 'Quick Hit',
    duration: '15 - 30 mins',
    description: 'Best for busy teams needing focused skill boosts and immediate takeaways.',
    icon: <Zap className="w-5 h-5 text-red-400" />,
  },
  {
    title: 'Half-Day',
    duration: '3 - 4 hours',
    description: 'Best for deep dives into specific topics with hands-on practice.',
    icon: <Clock className="w-5 h-5 text-red-400" />,
  },
  {
    title: 'Full-Day',
    duration: '6 - 8 hours',
    description: 'Best for comprehensive skill transformation with immersive learning.',
    icon: <Sun className="w-5 h-5 text-red-400" />,
  },
  {
    title: 'Multi-Session',
    duration: '2 - 6 weeks',
    description: 'Best for busy building behavioural change through spaced learning.',
    icon: <Calendar className="w-5 h-5 text-red-400" />,
  },
  {
    title: 'Custom',
    duration: 'Tailored',
    description: 'Best for unique organizational challenges requiring specialized solutions.',
    icon: <Settings2 className="w-5 h-5 text-red-400" />,
  },
];

export default function TrainingFormatsSmall() {
  return (
    <section className="bg-white py-12 px-4 font-sans">
        {/* <img src="dash.png" alt="" /> */}
      {/* Header Section - Smaller Margins & Font Sizes */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="uppercase tracking-widest text-[9px] font-bold bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full">
          Training Options
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-[#401111] mt-4 mb-4 leading-tight">
          Flexible Formats for Every Team
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Choose the learning schedule that fits your schedule and goals.
        </p>
      </div>

      {/* Grid - Reduced width and padding */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-5">
        {formats.map((item, index) => (
          <div 
            key={index}
            className="relative bg-white border-l-[3px] border-[#401111] rounded-2xl p-5 w-full md:w-[280px] shadow-[0_8px_30px_rgba(255,182,193,0.15)] flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-full bg-red-50">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold bg-red-50 text-red-400 px-2 py-0.5 rounded-full">
                  {item.duration}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-[#401111] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-normal mb-6">
                {item.description}
              </p>
            </div>

            <button className="flex items-center text-red-400 font-bold hover:text-red-500 transition-colors text-[11px] group">
              Explore this format 
              <ArrowRight className="ml-1.5 w-3 h-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
      <img src="dash.png" alt="" />
    </section>
  );
}