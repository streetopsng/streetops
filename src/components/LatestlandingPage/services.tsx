import SwiperSlider from "./ImageSlider"

export default function Services() {
  return (
    
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto"> 
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1f1f] Hero mb-6 tracking-tight">
            The streetops service
          </h2>
          <p className="text-[#2d1f1f]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            StreetOps creates solutions for building stronger, cultured, and connected teams.
          </p>
        </div>

        {/* The Slider Container */}
        <div className="relative w-full">
          <SwiperSlider />
        </div>
      </div>
    </section>
  )
}