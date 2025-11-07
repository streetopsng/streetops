// app/page.tsx

import { CtaBanner } from "@/components/NewLandingPage/ctabanner";
import { Footer } from "@/components/NewLandingPage/footer";

export default function SectionFive() {
  return (
    <main className="bg-gray-50">
     
      <div className="p-4 md:p-10">
        <CtaBanner />
      </div>
      
     
      <Footer />
    </main>
  );
}