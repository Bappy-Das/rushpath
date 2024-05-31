import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import FeatureSection from '../components/FeatureSection';
import BlogSection from '../components/BlogSection';
import AboutTheRushPathSection from '../components/AboutTheRushPathSection';
import CategorySection from '../components/CategorySection';
import TopFeatureSection from '../components/TopFeatureSection';

const HomePage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <TopFeatureSection></TopFeatureSection>
            <CategorySection></CategorySection>
            <FeatureSection></FeatureSection>
            <BlogSection></BlogSection>
            <AboutTheRushPathSection></AboutTheRushPathSection>
            <ContactSection></ContactSection>
        </>
    );
};

export default HomePage;