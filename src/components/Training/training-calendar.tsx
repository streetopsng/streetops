import React from "react";
import { ChevronDown } from "lucide-react";

const calendarDays = [
  { date: 1, status: "none" },
  { date: 2, status: "none" },
  { date: 3, status: "available" },
  { date: 4, status: "none" },
  { date: 5, status: "none" },
  { date: 6, status: "none" },
  { date: 7, status: "none" },
  { date: 8, status: "full" },
  { date: 9, status: "none" },
  { date: 10, status: "limited" },
  { date: 11, status: "none" },
  { date: 12, status: "none" },
  { date: 13, status: "none" },
  { date: 14, status: "none" },
  { date: 15, status: "available" },
  { date: 16, status: "none" },
  { date: 17, status: "available" },
  { date: 18, status: "none" },
  { date: 19, status: "none" },
  { date: 20, status: "none" },
  { date: 21, status: "none" },
  { date: 22, status: "available" },
  { date: 23, status: "none" },
  { date: 24, status: "available" },
  { date: 25, status: "none" },
  { date: 26, status: "none" },
  { date: 27, status: "none" },
  { date: 28, status: "none" },
  { date: 29, status: "available" },
  { date: 30, status: "none" },
  { date: 31, status: "none" },
];

const StatusUnderline = ({ status }: { status: string }) => {
  if (status === "available")
    return <div className="h-1 w-8 bg-teal-400 mt-1 rounded-full" />;
  if (status === "limited")
    return <div className="h-1 w-8 bg-orange-400 mt-1 rounded-full" />;
  if (status === "full")
    return <div className="h-1 w-8 bg-gray-300 mt-1 rounded-full" />;
  return <div className="h-1 w-8 bg-transparent mt-1" />;
};

export default function TrainingCalendar() {
  return (
    <section className="py-12 px-4 bg-white font-sans flex flex-col items-center ">
      {/* Header Section */}
      {/* <img src="dash.png" alt="" /> */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold bizmo-font text-red-950 mb-4 tracking-tight">
          Master New Skills this <br /> Month
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
          Join expert-led training sessions designed to accelerate your business
          growth. Choose from virtual or onsite formats that fit your schedule.
        </p>
      </div>

      {/* Calendar Card */}
      <div className="w-full max-w-2xl bg-[#FFF9F9] border border-red-50 rounded-[40px] p-8 md:p-12 shadow-sm">
        {/* Month Selector */}
        <div className="flex items-center gap-1 mb-10 cursor-pointer">
          <span className="font-bold text-gray-800">December 2025</span>
          <ChevronDown className="w-4 h-4 text-gray-800" />
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-8 text-center mb-12">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
            <span
              key={i}
              className={`font-bold text-sm ${
                day === "S" ? "text-red-500" : "text-gray-700"
              }`}
            >
              {day}
            </span>
          ))}

          {/* Empty cells for padding if month doesn't start on Sunday */}
          <div className="col-span-1"></div>

          {calendarDays.map((item) => (
            <div
              key={item.date}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-lg font-semibold text-gray-800">
                {item.date}
              </span>
              <StatusUnderline status={item.status} />
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center border-t border-red-100 pt-6">
          <span className="text-gray-600 font-medium">Sessions this month</span>
          <span className="text-teal-500 font-bold">7 available</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs font-bold text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-400 rounded-sm" /> Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-400 rounded-sm" /> Limited spots
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-300 rounded-sm" /> Full
        </div>
      </div>
    </section>
  );
}
