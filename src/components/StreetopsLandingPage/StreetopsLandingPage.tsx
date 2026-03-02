import React, { useState, useEffect } from "react";
import "./StreetopsLandingPage.css";

import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Physical from "./Physical";
import IdentityFoundation from "./IdentityFoundation";
import WhyStreetOps from "./WhyStreetOps";
import DemoCTA from "./DemoCTA";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import ReadyToBuild from "../AboutUsComponents/ready-to-build";

const StreetopsLandingPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("on");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.07, rootMargin: "0px 0px -20px 0px" },
        );

        document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

        return () => {
            obs.disconnect();
        };
    }, []);

    return (
        <div className="streetops-landing">
            <Nav onOpenModal={() => setIsModalOpen(true)} />
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <Features />
            <Physical />
            <IdentityFoundation />
            <WhyStreetOps />
            {/* <DemoCTA /> */}
            {/* <BlogSection /> */}
            <ReadyToBuild />
            <Footer />

            {/* Floating WhatsApp Widget */}
            <a
                href="https://api.whatsapp.com/send/?phone=2347026782510&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                    zIndex: 9999,
                    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
            >
                <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            </a>

            {/* Early Access Modal */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)'
                }}>
                    <div style={{
                        background: '#fff', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '440px',
                        position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.2)'
                    }}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#6B7280' }}
                        >
                            ✕
                        </button>
                        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#111' }}>Get Early Access</h3>
                        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '28px', lineHeight: 1.5 }}>Join the waitlist to be among the first to experience StreetOps.</p>

                        <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: '#374151' }}>Name *</label>
                                <input required type="text" placeholder="Jane Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none', fontFamily: '"Montserrat", sans-serif' }} />
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: '#374151' }}>Company Name <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(Optional)</span></label>
                                <input type="text" placeholder="Acme Inc." style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none', fontFamily: '"Montserrat", sans-serif' }} />
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: '#374151' }}>Role *</label>
                                <select required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none', background: '#fff', fontFamily: '"Montserrat", sans-serif' }}>
                                    <option value="" disabled selected>Select your role</option>
                                    <option value="CEO/Founder">CEO / Founder</option>
                                    <option value="C-Suite">C-Suite Executive</option>
                                    <option value="HR Manager">HR Manager</option>
                                    <option value="Team Lead">Team Lead</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '28px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: '#374151' }}>Work Email *</label>
                                <input required type="email" placeholder="jane@acme.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none', fontFamily: '"Montserrat", sans-serif' }} />
                            </div>

                            <button type="submit" className="hbtn" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                                Join Waitlist
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StreetopsLandingPage;
