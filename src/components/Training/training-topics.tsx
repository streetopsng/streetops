import React from "react";
import {
  Clock,
  Target,
  Lightbulb,
  Puzzle,
  User,
  Scale,
  ArrowRight,
  Megaphone,
  UsersRound,
  LayoutDashboard,
} from "lucide-react";
// import { UsersRound } from "lucide-react";

const topics = [
  {
    title: "Time Management",
    description:
      "Learn to prioritize tasks and eliminate time-wasters effectively.",
    icon: <Clock className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Goal Setting",
    description:
      "Master the art of setting and achieving meaningful objectives.",
    icon: <Target className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Problem Solving",
    description: "Discover creative techniques to overcome complex challenges.",
    icon: <Lightbulb className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Deep Work",
    description: "Develop focus techniques for uninterrupted productivity.",
    icon: <Puzzle className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Stress Management",
    description: "Build resilience and maintain balance under pressure.",
    icon: <User className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Work-Life Balance",
    description:
      "Create sustainable habits for personal and professional growth.",
    icon: <Scale className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Effective Communication",
    description: "Enhance clarity and impact in all your interactions.",
    icon: <Megaphone className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Team Collaboration",
    description: "Foster synergy and drive collective success.",
    icon: <UsersRound className="w-5 h-5 text-red-400" />,
  },
  {
    title: "Digital Productivity Tools",
    description: "Leverage technology to streamline your workflow.",
    icon: <LayoutDashboard className="w-5 h-5 text-red-400" />,
  },
];

export default function TrainingTopics() {
  return (
    <section className="py-8 px-4 bg-white font-sans">
      {/* <img src="dash.png" alt="" /> */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <span className="text-[9px] uppercase tracking-widest text-blue-500 border border-blue-200 px-2 py-0.5 rounded-full bg-blue-50 font-bold">
          Professional Development
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-red-950 mt-3 mb-2">
          Our Core Training Topics
        </h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto leading-snug">
          Expert-led modules designed to boost your professional skills and
          deliver results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[90%] w-[95%] mx-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#FFF9F9] p-5 rounded-2xl flex flex-col items-start border border-red-50/50 hover:shadow-sm transition-shadow"
          >
            <div className="bg-red-100 p-2.5 rounded-lg mb-3">{topic.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1.5 leading-tight">
              {topic.title}
            </h3>
            <p className="text-gray-500 text-xs mb-4 grow leading-normal">
              {topic.description}
            </p>
            <button className="flex items-center text-red-400 text-sm font-bold hover:text-red-500 transition-colors group">
              Learn more
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
      <img src="dash.png" alt="" />
    </section>
  );
}
