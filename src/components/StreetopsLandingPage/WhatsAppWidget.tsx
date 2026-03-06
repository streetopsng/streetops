"use client";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppWidget = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=2347026782510&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          // backgroundColor: "#25D366",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          zIndex: 9999,
          transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
        }}
      >
        <IoLogoWhatsapp size={50} className="text-[#25D366]" />
      </a>
    </>
  );
};

export default WhatsAppWidget;
