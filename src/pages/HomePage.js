import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import FeatureSection from '../components/FeatureSection';
import AboutUsSection from '../components/AboutUsSection';

const HomePage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <HeroSection></HeroSection>
            <h1 className="text-center font-class-brick rushpath_primary_bg rushpath_secondary pt-20 text-xl md:text-5xl lg:text-5xl  font-extrabold pb-10 capitalize">Learn C</h1>
            <FeatureSection></FeatureSection>
            <AboutUsSection></AboutUsSection>
            <h1 className="text-center font-class-brick rushpath_primary_bg rushpath_secondary pt-20 text-xl md:text-5xl lg:text-5xl  font-extrabold pb-10 uppercase">contact Us</h1>
            <ContactSection></ContactSection>
        </>
    );
};

export default HomePage;