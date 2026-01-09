import SwiperSlider from "./ImageSlider";

const services = [
  {
    id: "01",
    title: "Staff mapping",
    description:
      "Strategic role planning before hire. Know what you need and how it fits together",
    img: "/new-assets/staff-mapping.svg",
  },
  {
    id: "02",
    title: "Recruitment",
    description:
      "Culture-fit candidates who thrive in your environment. Skills get them in. Culture keeps them. ",
    img: "/new-assets/recruit.svg",
  },
  {
    id: "03",
    title: "Onboarding",
    description:
      "Transform strangers into productive teammates in 30 days. Delivered by expert vectors. Tracked by platform.",
    img: "/new-assets/onboarding.svg",
  },
  {
    id: "04",
    title: "Training and Development",
    description:
      "High-engagement skills training. Collaborative learning that actually sticks. ",
    img: "/new-assets/training.svg",
  },
  {
    id: "05",
    title: "Team Bonding (Fun Street)",
    description:
      "Monthly experiences that strengthen connections and show up in productivity.",
    img: "/new-assets/bonding.svg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-thirdPrimary Hero md:mb-6 mb-2 tracking-tight">
            The streetops <br className="md:hidden" /> service
          </h2>
          <p className="text-[#2d1f1f]/80 md:text-lg text-sm max-w-2xl mx-auto leading-relaxed">
            StreetOps creates solutions for building stronger, cultured, and
            connected teams.
          </p>
        </div>
        {/* Services Container */}
        <div className="relative w-full">
          {/* <SwiperSlider /> */}

          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-4/5 md:w-[95%] w-full mx-auto rounded-lg shadow-xl mt-8 border border-red-300"
              >
                <img src="/dash.png" alt="pattern" />
                <aside className="md:w-2/5 md:pl-8 px-4  md:text-start text-center">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="md:text-md text-sm">{item.description}</p>
                </aside>
                <aside className="flex md:flex-row flex-col justify-between items-end overflow-hidden">
                  <h1 className="text-[12rem] text-primary font-medium  h-60 md:-translate-x-10 md:translate-y-12 md:block hidden">
                    {item.id}
                  </h1>
                  <img
                    src={item.img}
                    alt="img"
                    className="h-60 md:translate-x-10 md:translate-y-12"
                  />
                </aside>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
