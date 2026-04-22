const Marquee = () => {
  const items = Array(16).fill("StreetOps");

  return (
    <div
      className="border-t border-b overflow-hidden py-2 sm:py-3 md:py-4"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(26, 15, 0, 0.08)",
      }}
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="px-4 sm:px-6 md:px-9 border-r text-[9px] sm:text-[10px] md:text-[11.5px] font-semibold h-[20px] sm:h-[22px] md:h-[26px] flex items-center whitespace-nowrap transition-colors hover:text-[#660000]"
            style={{
              color: "rgba(26, 15, 0, 0.28)",
              borderRightColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
