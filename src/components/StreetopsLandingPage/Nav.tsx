"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { openMobileMenu } from "@/store/slices/opemMobileMenuSlice";
import "./StreetopsLandingPage.css";
import { openModal } from "@/store/slices/form-modal-slice";

interface NavProps {
  onOpenModal?: () => void;
  variant?: "default" | "team-bonding";
}

const Nav: React.FC<NavProps> = ({ onOpenModal, variant = "default" }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<dispatchType>();

  // const { isOpen } = useSelector((items: RootStateType) => {
  //   return items.formModalReducer;
  // });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsProductOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="streetops-landing-nav">
      <a href="/" className="nlogo">
        <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
      </a>

      <div className="nlinks" ref={dropdownRef}>
        {variant === "team-bonding" ? (
          <>
            <a href="/training" className="nl">
              Training
            </a>
            <a href="/recruitment" className="nl">
              Recruitment
            </a>
            <a href="/team-bonding" className="nl">
              Team Bonding
            </a>
            <a href="/about" className="nl">
              About
            </a>
          </>
        ) : (
          <>
            <div
              className={`nl ${isServicesOpen ? "open" : ""}`}
              onClick={() => {
                setIsServicesOpen(!isServicesOpen);
                setIsProductOpen(false);
              }}
            >
              Services
              <svg className="chev" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 3.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="drop" style={{ width: "240px" }}>
                <a href="/team-bonding" className="ddi">
                  <div>
                    <div className="ddn">Team Bonding Session</div>
                  </div>
                </a>
                <a href="#engagement-consulting" className="ddi">
                  <div>
                    <div className="ddn">Engagement Consulting</div>
                  </div>
                </a>
                <a href="/training" className="ddi">
                  <div>
                    <div className="ddn">Skill Development Training</div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className={`nl ${isProductOpen ? "open" : ""}`}
              onClick={() => {
                setIsProductOpen(!isProductOpen);
                setIsServicesOpen(false);
              }}
            >
              Product
              <svg className="chev" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 3.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="drop" style={{ width: "190px" }}>
                <div className="ddi" style={{ cursor: "default" }}>
                  <div>
                    <div className="ddn">Team Identity System</div>
                    <div className="dds">(Coming Soon)</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/about" className="nl">
              About
            </a>

            <a href="/blog" className="nl">
              Blog
            </a>
            <a href="#ready-to-build" className="nl">
              Contact Us
            </a>
          </>
        )}
      </div>

      <div className="nright flex items-center ">
        {/* {variant === "team-bonding" ? (
          <a href="/blog" className="nbtn">
            Blog
          </a>
        ) : (
          <button
            className="nbtn"
            onClick={() => dispatch(openModal())}
            style={{
              whiteSpace: "nowrap",
              cursor: "pointer",
              marginInline: "0px",
            }}
          >
            Get Early Access
          </button>
        )} */}
        <button
          className="nbtn"
          onClick={() => dispatch(openModal())}
          style={{
            whiteSpace: "nowrap",
            cursor: "pointer",
            marginInline: "0px",
          }}
        >
          Get Early Access
        </button>
        <Button
          onClick={() => dispatch(openMobileMenu())}
          className="lg:hidden bg-white text-black hover:text-primary hover:bg-gray-300 "
        >
          <Menu />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
