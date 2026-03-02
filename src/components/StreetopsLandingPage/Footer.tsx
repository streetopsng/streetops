import React from "react";
import Link from "next/link";

interface FooterProps {
    variant?: 'default' | 'team-bonding';
}

const Footer: React.FC<FooterProps> = ({ variant = 'default' }) => {
    return (
        <footer>
            <div className="ftin">
                <div>
                    <a href="#" className="nlogo">
                        <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
                    </a>
                    <p className="fdesc">
                        {variant === 'team-bonding'
                            ? "Social productivity for all team"
                            : "The social productivity ecosystem. Behavioural technology for teams that take people seriously."}
                    </p>
                    <div className="fsocs">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/streetopsng"
                            className="fso"
                        >
                            in
                        </a>
                        <a target="_blank" href="https://x.com/StreetOpsng" className="fso">
                            𝕏
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/street_opsng/"
                            className="fso"
                        >
                            ig
                        </a>
                        <a
                            target="_blank"
                            href="https://www.tiktok.com/@streetops.ng"
                            className="fso"
                        >
                            tk
                        </a>
                    </div>
                </div>
                {variant === 'team-bonding' ? (
                    <>
                        <div>
                            <div className="fct">Company</div>
                            <ul className="fl">
                                <li><Link href="/about">About us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="fct">Services</div>
                            <ul className="fl">
                                <li><Link href="/recruitment">Recruitment</Link></li>
                                <li><Link href="/training">Training</Link></li>
                                <li><Link href="/team-bonding">Team Bonding</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="fct">Legal</div>
                            <ul className="fl">
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <div className="fct">Solutions</div>
                            <ul className="fl">
                                <li><a href="/team-bonding">Team Bonding</a></li>
                                <li><a href="/training">Skill Development Training</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="fct">Company</div>
                            <ul className="fl">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/blog">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="fct">Get Started</div>
                            <ul className="fl">
                                <li><a href="#ready-to-build">Book a Discovery Call</a></li>
                                <li><a href="#">Get Early Access</a></li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <div className="fbot">
                <div className="fbc">
                    © 2026 StreetOps · Lagos,Nigeria · info@streetops.ng
                </div>
                <div className="fbl">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
