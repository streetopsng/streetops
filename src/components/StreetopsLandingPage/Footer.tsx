import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="ftin">
                <div>
                    <a href="#" className="nlogo">
                        <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
                    </a>
                    <p className="fdesc">The social productivity ecosystem. Behavioural technology for teams that take people seriously.</p>
                    <div className="fsocs">
                        <a href="#" className="fso">in</a>
                        <a href="#" className="fso">𝕏</a>
                        <a href="#" className="fso">ig</a>
                    </div>
                </div>
                <div>
                    <div className="fct">Solutions</div>
                    <ul className="fl">
                        <li><a href="#">Team Engagement</a></li>
                        <li><a href="#">Team Onboarding</a></li>
                        <li><a href="#">Task Tracker</a></li>
                        <li><a href="#">Games & Collaboration</a></li>
                        <li><a href="#">Team Bonding</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>
                <div>
                    <div className="fct">Company</div>
                    <ul className="fl">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <div className="fct">Get Started</div>
                    <ul className="fl">
                        <li><a href="#">Request Demo</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
            </div>
            <div className="fbot">
                <div className="fbc">© 2026 StreetOps · Lagos,Nigeria · info@streetops.ng</div>
                <div className="fbl">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
