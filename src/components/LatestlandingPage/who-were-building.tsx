import { Users } from "lucide-react"

export default function WhoWereBuilding() {
  const businessTypes = [
    { number: "01", title: "Solo-preneur", description: "onboarding for your first hire", position: "left" },
    { number: "02", title: "SME", description: "Simple onboarding for growing teams", position: "right" },
    { number: "03", title: "Enterprise", description: "structure for large teams", position: "left" },
    { number: "04", title: "Social", description: "community and volunteer onboarding", position: "right" },
    { number: "05", title: "Project", description: "Dev and technical teams", position: "left" },
    {
      number: "06",
      title: "Street plan",
      description: "simple onboarding for informal workers make icons very simple and warm.",
      position: "right",
    },
  ]

  return (
    <section className="relative py-16 px-6 bg-[#1a0f0f] overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/city-buildings-outline-pattern-dark-geometric-urba.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 16" preserveAspectRatio="none">
          <path
            d="M0,16 Q10,0 20,16 T40,16 T60,16 T80,16 T100,16 T120,16 T140,16 T160,16 T180,16 T200,16 T220,16 T240,16 T260,16 T280,16 T300,16 T320,16 T340,16 T360,16 T380,16 T400,16 T420,16 T440,16 T460,16 T480,16 T500,16 T520,16 T540,16 T560,16 T580,16 T600,16 T620,16 T640,16 T660,16 T680,16 T700,16 T720,16 T740,16 T760,16 T780,16 T800,16 T820,16 T840,16 T860,16 T880,16 T900,16 T920,16 T940,16 T960,16 T980,16 T1000,16 T1020,16 T1040,16 T1060,16 T1080,16 T1100,16 T1120,16 T1140,16 T1160,16 T1180,16 T1200,16 V0 H0 Z"
            fill="#c41e3a"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white Hero text-center mb-20">
          Who we're building for
        </h2>

        <div className="relative">
          {/* Center dashed line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"
            style={{
              borderLeft: "2px dashed rgba(196, 30, 58, 0.4)",
            }}
          />

          <div className="space-y-32">
            {businessTypes.map((item, index) => (
              <div key={index} className="relative flex items-center min-h-[80px]">
                {item.position === "left" ? (
                  <>
                    {/* Left side - title and description */}
                    <div className="flex-1 text-right pr-8">
                      <h3 className="text-xl md:text-2xl font-bold Hero text-white mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm max-w-[200px] ml-auto">{item.description}</p>
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#c41e3a] bg-[#1a0f0f] flex items-center justify-center z-10">
                      <Users className="w-5 h-5 text-[#c41e3a]" />
                    </div>

                    {/* Right side - dashed line and number */}
                    <div className="flex-1 pl-8 flex items-center">
                      <div className="w-32 h-0" style={{ borderTop: "2px dashed rgba(196, 30, 58, 0.4)" }} />
                      <span className="text-6xl md:text-8xl font-bold ml-4" style={{ color: "rgba(196, 30, 58, 0.2)" }}>
                        {item.number}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side - number and dashed line */}
                    <div className="flex-1 text-right pr-8 flex items-center justify-end">
                      <span className="text-6xl md:text-8xl font-bold mr-4" style={{ color: "rgba(196, 30, 58, 0.2)" }}>
                        {item.number}
                      </span>
                      <div className="w-32 h-0" style={{ borderTop: "2px dashed rgba(196, 30, 58, 0.4)" }} />
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#c41e3a] bg-[#1a0f0f] flex items-center justify-center z-10">
                      <Users className="w-5 h-5 text-[#c41e3a]" />
                    </div>

                    {/* Right side - title and description */}
                    <div className="flex-1 pl-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm max-w-[200px]">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
