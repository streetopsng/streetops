"use client"
import ClientLogos from "./client-logo"
export default function ImageGallery() {
  const images = [
    {
      id: 1,
      src: "image-1.png",
      alt: "Street market scene",
//       rotation:1,
    },
    {
      id: 2,
      src: "image-2.png",
      alt: "Street photography",
//       rotation: 0,
    },
    {
      id: 3,
      src: "image-3.png",
      alt: "Inventory management",
//       rotation: -1,
    },
  ]

  return (
    <section className="relative mt-[-100px] ">
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[#1D0101]"></div>
      <div className="relative flex justify-center items-end gap-4 md:gap-4  flex-wrap z-10">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative  md:w-90 md:h-90 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            style={{
              transform: `translateY(${index === 1 ? "20px" : "0"})`,
            }}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
<div>
    <ClientLogos/>
</div>
    </section>
  )
}