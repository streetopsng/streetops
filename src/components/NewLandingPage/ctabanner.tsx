"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    
    <div className="bg-red-600 text-white md:p-12 rounded-2xl  relative">
      <div className="flex  flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
       
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl Hero font-bold mb-3">
            Is StreetOps for me?
          </h2>
          <p className="text-lg max-w-md Hero">
            Take the quiz to discover the scalable solutions that bridge
            the gap between your ambition and execution.
          </p>
        </div>

        {/* Button */}
        <div className="flex-shrink-0">
          <Button
            className="bg-white Hero text-red-600 rounded-full py-3 px-6 text-md font-semibold hover:bg-gray-100"
            size="lg" 
          >
            Take quiz to find out
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>

  );
}