const contactInfo = [
  {
    id: 1,
    title: "Email Us",
    link: "mailto:info@streetops.ng",
    value: "info@streetops.ng",
    icon: "/new-assets/email-us.svg",
  },
  {
    id: 2,
    title: "Call Us",
    link: "tel:+2347026782510",
    value: "+234 702 6782 510",
    icon: "/new-assets/call-us.svg",
  },
  {
    id: 3,
    title: "Visit Us",
    link: "",
    value: "Lagos, Nigeria",
    icon: "/new-assets/visit-us.svg",
  },
];
const RecruitmentContact = () => {
  return (
    <div className="flex flex-wrap justify-between lg:px-16 md:px-8 px-4   gap-y-4  bg-white py-6">
      {contactInfo.map((item, index) => {
        return (
          <a
            href={item.link}
            key={index}
            target="_blank"
            className="bg-white shadow-2xl md:w-[30%] w-full rounded-2xl flex flex-col items-center justify-center py-4"
          >
            <div className="w-12 h-12 bg-[#FD8D8C] rounded-full flex items-center justify-center mb-4 p-2">
              <img src={item.icon} alt="icon" />
            </div>
            <h1 className="font-semibold">{item.title}</h1>
            <p className="text-sm">{item.value}</p>
          </a>
        );
      })}
    </div>
  );
};

export default RecruitmentContact;
