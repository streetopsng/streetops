import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { dispatchType } from "@/store";
import { openMobileMenu } from "@/store/slices/opemMobileMenuSlice";

interface NavProps {
    onOpenModal?: () => void;
}

const Nav: React.FC<NavProps> = ({ onOpenModal }) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch<dispatchType>();

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
        <nav>
            <a href="#" className="nlogo">
                <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
            </a>

            <div className="nlinks" ref={dropdownRef}>
                <div
                    className={`nl ${isServicesOpen ? 'open' : ''}`}
                    onClick={() => {
                        setIsServicesOpen(!isServicesOpen);
                        setIsProductOpen(false);
                    }}
                >
                    Services
                    <svg className="chev" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="drop" style={{ width: '240px' }}>
                        <a href="/team-bonding" className="ddi">
                            <div>
                                <div className="ddn">Team Bonding Session</div>
                            </div>
                        </a>
                        <a href="/services/engagement-consulting" className="ddi">
                            <div>
                                <div className="ddn">Engagement Consulting</div>
                            </div>
                        </a>
                        <a href="/services/skill-development" className="ddi">
                            <div>
                                <div className="ddn">Skill Development Training</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div
                    className={`nl ${isProductOpen ? 'open' : ''}`}
                    onClick={() => {
                        setIsProductOpen(!isProductOpen);
                        setIsServicesOpen(false);
                    }}
                >
                    Product
                    <svg className="chev" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="drop" style={{ width: '190px' }}>
                        <div className="ddi" style={{ cursor: 'default' }}>
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
                <a href="#ready-to-build" className="nl">
                    Book a Demo
                </a>
                <a href="/blog" className="nl">
                    Blog
                </a>
                <a href="#ready-to-build" className="nl">
                    Contact Us
                </a>
            </div>

            <div className="nright flex items-center gap-2">
                <button
                    className="nbtn"
                    onClick={onOpenModal}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    Get Early Access
                </button>
                <Button
                    onClick={() => dispatch(openMobileMenu())}
                    className="lg:hidden bg-white text-black hover:text-primary hover:bg-gray-300 ml-2"
                >
                    <Menu />
                </Button>
            </div>
        </nav>
    );
};

export default Nav;
