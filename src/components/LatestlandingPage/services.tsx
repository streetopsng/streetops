// import Image from "next/image"
import SwiperSlider from "./ImageSlider"

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1f1f] Hero mb-4">The streetops service</h2>
          <p className="text-[#2d1f1f]/70 max-w-2xl mx-auto">
            StreetOps creates solutions for building stronger, cultured, and connected teams.
          </p>
        </div>

       <SwiperSlider />
      </div>
    </section>
  )
}
