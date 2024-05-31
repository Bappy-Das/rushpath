import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import FeatureSection from '../components/FeatureSection';
import BlogSection from '../components/BlogSection';
import AboutTheRushPathSection from '../components/AboutTheRushPathSection';

const HomePage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
            <BlogSection></BlogSection>
            <AboutTheRushPathSection></AboutTheRushPathSection>
            <ContactSection></ContactSection>
        </>
    );
};

export default HomePage;