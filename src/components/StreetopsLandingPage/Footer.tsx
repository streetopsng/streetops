import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="ftin">
        <div>
          <a href="#" className="nlogo">
            <img src="/red-logo.png" alt="StreetOps Logo" width="120" />
          </a>
          <p className="fdesc">
            The social productivity ecosystem. Behavioural technology for teams
            that take people seriously.
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
        <div>
          <div className="fct">Solutions</div>
          <ul className="fl">
            <li>
              <a href="/team-bonding">Team Bondig</a>
            </li>
            {/* <li>
              <a href="#">Team Onboarding</a>
            </li> */}
            <li>
              <a href="/training">Training</a>
            </li>
            <li>
              <a href="/recruitment">Recruitment</a>
            </li>
            {/* <li>
              <a href="#">Team Bonding</a>
            </li>
            <li>
              <a href="#">Consulting</a>
            </li> */}
          </ul>
        </div>
        <div>
          <div className="fct">Company</div>
          <ul className="fl">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            {/* <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li> */}
          </ul>
        </div>
        <div>
          <div className="fct">Get Started</div>
          <ul className="fl">
            <li>
              <a href="#">Request Demo</a>
            </li>
            {/* <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Pricing</a></li> */}
          </ul>
        </div>
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
