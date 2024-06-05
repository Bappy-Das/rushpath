import React from 'react';
import Breadcump from '../components/Breadcump';
import AboutUsSection from '../components/AboutUsSection';


const AboutPage = () => {
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