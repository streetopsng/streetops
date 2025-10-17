"use client"

export default function ClientLogos() {
  const logos = [
    { id: 1, name: "Slack", initials: "SLACK" },
    { id: 2, name: "TED", initials: "TED" },
    { id: 3, name: "CNN", initials: "CNN" },
    { id: 4, name: "Visa", initials: "VISA" },
    { id: 5, name: "GitHub", initials: "GitHub" },
    { id: 6, name: "LADSPA", initials: "LADSPA" },
  ]

  return (
    <section className="py-16 md:py-24 px-6 ">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="text-gray-600 text-lg md:text-xl font-semibold opacity-60 hover:opacity-100 transition-opacity"
          >
            {logo.initials}
          </div>
        ))}
      </div>
    </section>
  )
}
