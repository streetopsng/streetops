import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { dispatchType } from "@/store";
import { openMobileMenu } from "@/store/slices/opemMobileMenuSlice";

const Nav: React.FC = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<dispatchType>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav>
      <a href="#" className="nlogo">
        <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
      </a>
      <div className="nlinks">
        <a href="/team-bonding" className="nl">
          Team Bonding
        </a>
        <a href="/training" className="nl">
          Training
        </a>
        <a href="/recruitment" className="nl">
          Recruitment
        </a>
        <a href="/about" className="nl">
          About
        </a>
      </div>
      <div className="nright">
        <a href="/blog" className="nbtn">
          Blog
        </a>
        <Button
          onClick={() => dispatch(openMobileMenu())}
          className="md:hidden bg-white text-black hover:text-primary hover:bg-gray-300"
        >
          <Menu />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
