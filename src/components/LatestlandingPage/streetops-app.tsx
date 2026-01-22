"use client";

import { Button } from "../ui/button";

export default function StreetOpsApp() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-thirdPrimary Hero md:mb-6 mb-2 tracking-tight">
            The Streetops App
          </h2>
          <p className="text-[#2d1f1f]/80 md:text-lg text-sm max-w-2xl mx-auto leading-relaxed">
            Track engagement. Build culture. Drive results.
          </p>
        </div>

        <p className="text-lightPink font-semibold text-center lg:text-4xl md:text-2xl text-xl  ">
          COMING SOON!
        </p>

        <div className="relative w-full flex flex-col justify-center items-center">
          <img src="/new-assets/dashboard-laptop.png" alt="dashboard" />

          <Button className="bg-primary rounded-full px-8">
            Request Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}
