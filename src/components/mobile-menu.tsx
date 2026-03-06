"use client";
import { dispatchType, RootStateType } from "@/store";
import { closeMobileMenu } from "@/store/slices/opemMobileMenuSlice";
import { useDispatch, useSelector } from "react-redux";

export function MobileMenu() {
  const dispatch = useDispatch<dispatchType>();
  const menuState = useSelector((store: RootStateType) => {
    return store.mobileMenuReducer;
  });
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => dispatch(closeMobileMenu())}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          menuState ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-screen bg-white transform transition-transform duration-300 ease-in-out
        ${menuState ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-lg font-semibold ">Menu</span>
          <button
            onClick={() => dispatch(closeMobileMenu())}
            className="text-2xl font-semibold"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4 px-6 py-10 text-lg text-primary">
          <div className="border-b borde-black py-2">
            <h1 className="text-black capitalize underline">services</h1>

            <a
              href="/team-bonding"
              style={{ fontSize: "1rem", color: "red" }}
              onClick={() => dispatch(closeMobileMenu())}
            >
              Team Bonding Session
            </a>
            <br />
            <a
              onClick={() => dispatch(closeMobileMenu())}
              style={{ fontSize: "1rem", color: "red" }}
            >
              Engagement Consulting
            </a>
            <br />
            <a
              href="/training"
              onClick={() => dispatch(closeMobileMenu())}
              style={{ fontSize: "1rem", color: "red" }}
            >
              Skill Development Training
            </a>
          </div>

          <div className="border-b borde-black py-2">
            <h1 className="text-black capitalize underline">Product</h1>

            <a
              href="#"
              style={{ fontSize: "1rem", color: "red" }}
              onClick={() => dispatch(closeMobileMenu())}
            >
              <div>Team Identity System(coming soon)</div>
            </a>
          </div>

          <a
            href="/blog"
            style={{ fontSize: "1rem" }}
            onClick={() => dispatch(closeMobileMenu())}
          >
            Blog
          </a>
          <a
            href="#ready-to-build"
            className=""
            style={{ fontSize: "1rem" }}
            onClick={() => dispatch(closeMobileMenu())}
          >
            Contact Us
          </a>
          <a
            href="/about"
            style={{ fontSize: "1rem" }}
            onClick={() => dispatch(closeMobileMenu())}
          >
            About
          </a>

          {/* <a href="#ready-to-build" onClick={() => dispatch(closeMobileMenu())}>
            Ready to Build
          </a>
          <a href="/about" onClick={() => dispatch(closeMobileMenu())}>
            About
          </a> */}
        </nav>
      </div>
    </>
  );
}
