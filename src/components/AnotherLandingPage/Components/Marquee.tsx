const Marquee = () => {
  const items = Array(16).fill("Trusted Client");

  return (
    <div
      className="border-t border-b overflow-hidden py-4"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(26, 15, 0, 0.08)",
      }}
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="px-9 border-r text-[11.5px] font-semibold h-[26px] flex items-center whitespace-nowrap transition-colors hover:text-[#660000]"
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
