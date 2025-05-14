"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">About Us</h2>
            <p className="text-sm leading-relaxed">
              We drive the future of work by integrating people, processes, and performance. Our solutions empower organizations to adapt, scale, and succeed in a dynamic market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/people" className="hover:text-white">People</Link></li>
              <li><Link href="/processes" className="hover:text-white">Processes</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Connect With Us</h2>
            <div className="flex space-x-4 mb-4">
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="hover:text-white text-lg" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedin className="hover:text-white text-lg" />
              </Link>
              <Link href="https://facebook.com" target="_blank">
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
