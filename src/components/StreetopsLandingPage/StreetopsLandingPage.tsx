import React, { useEffect } from 'react';
import './StreetopsLandingPage.css';

import Nav from './Nav';
import Hero from './Hero';
import Features from './Features';
import Physical from './Physical';
import IdentityFoundation from './IdentityFoundation';
import WhyStreetOps from './WhyStreetOps';
import DemoCTA from './DemoCTA';
import BlogSection from './BlogSection';
import Footer from './Footer';

const StreetopsLandingPage: React.FC = () => {
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('on');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.07, rootMargin: '0px 0px -20px 0px' }
        );

        document.querySelectorAll('.rv').forEach((el) => obs.observe(el));

        return () => {
            obs.disconnect();
        };
    }, []);

    return (
        <div className="streetops-landing">
            <Nav />
            <Hero />
            <Features />
            <Physical />
            <IdentityFoundation />
            <WhyStreetOps />
            <DemoCTA />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default StreetopsLandingPage;
