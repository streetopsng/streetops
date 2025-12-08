export default function Approach() {
  return (
    <section className="py-16 px-6 bg-white ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            <p className="text-[#FA2120] text-sm font-medium mb-2">About us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1f1f] tracking-wide Hero" >
              OUR APPROACH
            </h2>
          </div>
          <div className="flex items-start gap-3 max-w-md">
            <div className="text-[#ff6b6b] text-2xl mt-1 flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <p className="text-[#2d1f1f]/80 text-sm  Hero">
              Our model delivers holistic team performance by combining behavioural technology, human delivery, and
              proven methodology.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* The Platform - light card */}
          <div className="p-8 rounded-2xl text-center bg-[#fff5f5] border border-[#ffe5e5]">
            <div className="mx-auto mb-4 text-[#ff6b6b]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mx-auto"
              >
                <path d="M24 8L8 16v8c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24v-8L24 8z" />
                <path d="M16 24l6 6 10-12" />
              </svg>
            </div>
            <h3 className="text-lg Hero font-semibold mb-3 text-[#2d1f1f]">The Platform</h3>
            <p className="text-sm text-[#2d1f1f]/70 leading-relaxed">
              Personalizes team journeys, tracks engagement, build relationships and boost productivity
            </p>
          </div>

          {/* The services - red card */}
          <div className="p-8 rounded-2xl text-center bg-[#FA2120] border border-[#c41e3a]">
            <div className="mx-auto mb-4 text-white">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mx-auto"
              >
                <path d="M24 8L8 16v8c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24v-8L24 8z" />
                <path d="M16 24l6 6 10-12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 Hero text-white">The services</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Expert vectors facilitate onboarding, training, and team bonding. Culture transfer, not information
              transfer.
            </p>
          </div>

          {/* The System - light card */}
          <div className="p-8 rounded-2xl text-center Hero bg-[#fff5f5] border border-[#ffe5e5]">
            <div className="mx-auto mb-4 text-[#ff6b6b]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mx-auto"
              >
                <path d="M24 8L8 16v8c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24v-8L24 8z" />
                <path d="M16 24l6 6 10-12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#2d1f1f]">The System</h3>
            <p className="text-sm text-[#2d1f1f]/70 leading-relaxed">
              Full lifecycle: Staff Mapping 'n Recruitment 'n Onboarding 'n Team Bonding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
