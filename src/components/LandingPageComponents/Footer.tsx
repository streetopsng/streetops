"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">About Us</h2>
            <p className="text-sm leading-relaxed">
              We drive the future of work by integrating people, processes, and performance. Our solutions empower organizations to adapt, scale, and succeed in a dynamic market.
            </p>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Questions</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-white">Help</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Team/Services Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Explore</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/people" className="hover:text-white">Team</Link>
              </li>
              <li>
                <Link href="/processes" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Copyright */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Connect With Us</h2>
            <div className="flex space-x-4 mb-4">
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter className="hover:text-white text-lg" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="hover:text-white text-lg" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebookF className="hover:text-white text-lg" />
              </Link>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Paige. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
