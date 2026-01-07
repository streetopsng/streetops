import { Button } from "@/components/ui/button"

export default function TrainingCta() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('/cta.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Red overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FA2120]/70 to-[#941413]/50" />

          <div className="relative z-10 py-16 px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold Hero text-white  mb-8 leading-tight">
              Ready to Transform Your
              <br />
              Team's Productivity 
            </h2>
            <p>
                Let's explore how we can help your team reach new <br /> heights together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-[#FA2120] hover:bg-[#a01830] text-white rounded-full px-8 text-sm">
                Book Training
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#2d1f1f] hover:bg-white/90 rounded-full px-8 border-none text-sm"
              >
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img src="dash.png" alt="" />
    </section>
  )
}
