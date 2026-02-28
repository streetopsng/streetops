import React, { useState, useRef, useEffect } from 'react';

const Nav: React.FC = () => {
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSolutionsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav>
            <a href="#" className="nlogo">
                <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
            </a>
            <div className="nlinks">
                <div
                    className={`nl ${isSolutionsOpen ? 'open' : ''}`}
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    ref={dropdownRef}
                >
                    Solutions
                    <svg className="chev" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="drop">
                        <a href="#solutions" className="ddi">
                            <div className="dic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.3" />
                                    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" />
                                    <circle cx="7" cy="7" r=".8" fill="currentColor" />
                                </svg>
                            </div>
                            <div>
                                <div className="ddn">Team Engagement</div>
                                <div className="dds">Measure & sustain team health</div>
                            </div>
                        </a>
                        <a href="#solutions" className="ddi">
                            <div className="dic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 10V7M5 10V5M8 10V6M11 10V3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="ddn">Team Onboarding</div>
                                <div className="dds">Identity-native activation</div>
                            </div>
                        </a>
                        <a href="#solutions" className="ddi">
                            <div className="dic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M4 7l2.5 2.5L10 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="ddn">Task Tracker</div>
                                <div className="dds">Behavioural task intelligence</div>
                            </div>
                        </a>
                        <a href="#solutions" className="ddi">
                            <div className="dic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                    <path d="M5 5h4M7 3v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="ddn">Games & Collaboration</div>
                                <div className="dds">Identity-powered team bonding</div>
                            </div>
                        </a>
                        <a href="#physical" className="ddi">
                            <div className="dic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M7 1l1.2 2.5L11 4l-2 2 .5 3L7 7.8 4.5 9 5 6 3 4l2.8-.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="ddn">Team Bonding Sessions</div>
                                <div className="dds">Physical,in-person experiences</div>
                            </div>
                        </a>
                        <a href="#physical" className="ddi">
                            <div className="dic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 10V4l5-2 5 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="5" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
                                </svg>
                            </div>
                            <div>
                                <div className="ddn">Consulting</div>
                                <div className="dds">Hands-on engagement programmes</div>
                            </div>
                        </a>
                    </div>
                </div>
                <a href="#why" className="nl">Why StreetOps</a>
                <a href="#blog" className="nl">Blog</a>
                <a href="#demo" className="nl">Pricing</a>
            </div>
            <div className="nright">
                <a href="#" className="nsign">Sign up</a>
                <a href="#demo" className="nbtn">Request demo →</a>
            </div>
        </nav>
    );
};

export default Nav;
