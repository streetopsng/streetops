"use client"
// import Cards from "@/components/carousel-one"
import ImageCarousel from "./carousel-one"
export default function SectionThree() {
    return(
        <>
           <section className="md:p-8 text-center ">
            <div>
                <p className="text-red-600 md:mt-4 Hero"> Our Core Services</p>
                <h1 className="text-3xl font-bold Hero"> Core Services</h1>
                <p className="Hero text-gray-300">The Blueprint for Resilient Growth</p>
            </div>
            <ImageCarousel/>
           </section>

        </>
    )
}