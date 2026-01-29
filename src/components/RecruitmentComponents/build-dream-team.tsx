"use client";
import React from "react";
import { Button } from "../ui/button";

const BuildDreamTeam = () => {
  return (
    <section className="py-16  px-4">
      <div className="md:w-[90%] w-full h-full  mx-auto ">
        <div
          className="relative rounded-3xl overflow-hidden h-full w-full"
          style={{
            backgroundImage: `url('/new-assets/build.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 py-16  text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold Hero text-white   lg:w-[40%]  w-full mx-auto mb-8 leading-tight">
              Ready to Build Your Dream Team?
            </h2>
            <p className="lg:w-[40%] w-full mx-auto">
              Let's discuss how our recruitment process can help you find the
              perfect candidates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                onClick={() => {
                  window.open(
                    "https://calendly.com/streetopsng/30min",
                    "_blank",
                  );
                }}
                variant="outline"
                className="bg-white text-[#2d1f1f] hover:bg-white/90 rounded-full px-8 border-none text-sm cursor-pointer"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img src="dash.png" alt="" />
    </section>
  );
};

export default BuildDreamTeam;
