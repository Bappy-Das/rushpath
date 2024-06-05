import React from 'react';
import Breadcump from '../components/Breadcump';
import AboutUsSection from '../components/AboutUsSection';


const AboutPage = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Breadcump title={"About Us"}></Breadcump>
            <div className=''>
                <AboutUsSection></AboutUsSection>
            </div>
        </div>
    );
};

export default AboutPage;