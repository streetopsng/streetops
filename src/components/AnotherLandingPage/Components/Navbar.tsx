"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      dropdown: [
        { name: "Our Story", href: "/about" },
        { name: "The Team", href: "/about#team" },
        { name: "Case Studies", href: "/cases" },
      ],
    },
    {
      name: "Services",
      dropdown: [
        { name: "All Services", href: "/services" },
        { name: "Team Diagnostic", href: "/services/diagnostic" },
        { name: "Manager Effectiveness Training", href: "/services/manager" },
        { name: "Talent Integration Advisory", href: "/services/talent" },
        { name: "Culture & Process Transformation", href: "/services/culture" },
        {
          name: "Team Engagement & Experience Design",
          href: "/services/experience",
        },
      ],
    },
    {
      name: "Programs",
      dropdown: [
        { name: "All Programs", href: "/programs" },
        { name: "Vector Training Program", href: "/programs/vector" },
      ],
    },
    {
      name: "Products",
      dropdown: [
        {
          name: "Paige → usepaige.io",
          href: "https://usepaige.io",
          external: true,
        },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Insights", href: "/insights" },
        { name: "Research & Reports", href: "/reports" },
        { name: "Tools & Frameworks", href: "/tools" },
        { name: "Case Studies", href: "/cases" },
      ],
    },
    { name: "Street Ask", href: "/ask" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-200 h-[60px] flex items-center px-10 backdrop-blur-[18px] border-b"
      style={{
        backgroundColor: "rgba(255, 248, 238, 0.92)",
        borderBottomColor: "rgba(26, 15, 0, 0.08)",
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-2.5 mr-auto cursor-pointer"
      >
        <div
          className="w-7 h-7 flex items-center justify-center rounded-[2px] flex-shrink-0"
          style={{ backgroundColor: "#660000" }}
        >
          <span className="text-white font-serif font-bold text-[10px]">
            SO
          </span>
        </div>
        <span
          className="font-serif font-semibold text-base tracking-tight"
          style={{ color: "#1A0F00" }}
        >
          StreetOps
        </span>
      </Link>

      <ul className="flex items-center list-none mr-3 gap-0">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={() => item.dropdown && setShowDropdown(item.name)}
            onMouseLeave={() => setShowDropdown(null)}
          >
            {item.dropdown ? (
              <>
                <button
                  className="px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap"
                  style={{ color: "rgba(26, 15, 0, 0.45)" }}
                  onMouseEnter={() => setShowDropdown(item.name)}
                >
                  {item.name} ▾
                </button>
                {showDropdown === item.name && (
                  <div
                    className="absolute top-full left-0  min-w-[230px] shadow-lg z-300 border rounded"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgba(26, 15, 0, 0.08)",
                      boxShadow: "0 20px 48px rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block w-full px-4 py-2.5 text-xs text-left border-b transition-all hover:pl-5.5"
                        style={{
                          color: "rgba(26, 15, 0, 0.65)",
                          borderBottomColor: "rgba(26, 15, 0, 0.08)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(102, 0, 0, 0.06)";
                          e.currentTarget.style.color = "#660000";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "rgba(26, 15, 0, 0.65)";
                        }}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap"
                style={{ color: "rgba(26, 15, 0, 0.45)" }}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2.5">
        <button
          onClick={toggleTheme}
          className="w-11 h-6 rounded-full relative cursor-pointer border flex-shrink-0"
          style={{
            backgroundColor: "#FFF2E0",
            borderColor: "rgba(26, 15, 0, 0.14)",
          }}
        >
          <span
            className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] transition-opacity"
            style={{ opacity: theme === "dark" ? 0 : 0.4 }}
          >
            ☀
          </span>
          <span
            className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] transition-opacity"
            style={{ opacity: theme === "dark" ? 0.5 : 0 }}
          >
            ☽
          </span>
          <span
            className="absolute w-[18px] h-[18px] rounded-full top-[2px] transition-transform duration-300"
            style={{
              backgroundColor: "#FFFFFF",
              left: theme === "dark" ? "auto" : "2px",
              right: theme === "dark" ? "2px" : "auto",
              transform: theme === "dark" ? "translateX(0)" : "translateX(0)",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          />
        </button>
        <Link
          href="/contact"
          className="px-[18px] py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap"
          style={{ backgroundColor: "#660000", color: "#FFFFFF" }}
        >
          Work With Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
