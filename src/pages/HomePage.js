import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import FeatureSection from '../components/FeatureSection';
import BlogSection from '../components/BlogSection';
import AboutTheRushPathSection from '../components/AboutTheRushPathSection';
import CategorySection from '../components/CategorySection';
import TopFeatureSection from '../components/TopFeatureSection';
import FeatureBannerTwo from '../components/FeatureBannerTwo';

const HomePage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <TopFeatureSection></TopFeatureSection>
            <CategorySection></CategorySection>
            <FeatureBannerTwo></FeatureBannerTwo>
            <h1 className="text-center pt-20 text-xl md:text-5xl lg:text-5xl  font-extrabold pb-10 uppercase">FEATURED <span className='text-[#F5C11D]'>GAMES</span></h1>
            <FeatureSection></FeatureSection>
            <h1 className="text-center bg-gray-100 pt-20 text-xl md:text-5xl lg:text-5xl  font-extrabold pb-10 uppercase">BLOG <span className='text-[#F5C11D]'>& NEWS</span></h1>
            <BlogSection></BlogSection>
            <AboutTheRushPathSection></AboutTheRushPathSection>
            <ContactSection></ContactSection>
        </>
    );
};

export default HomePage;