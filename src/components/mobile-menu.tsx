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
        <nav className="flex flex-col gap-6 px-6 py-10 text-lg text-primary">
          <a href="/training" onClick={() => dispatch(closeMobileMenu())}>
            Training
          </a>
          <a href="/recruitment" onClick={() => dispatch(closeMobileMenu())}>
            Recruitment
          </a>
          <a href="/team-bonding" onClick={() => dispatch(closeMobileMenu())}>
            Team Bonding
          </a>
        </nav>
      </div>
    </>
  );
}
