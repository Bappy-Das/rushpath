import React from 'react';
import FeatureSection from '../components/FeatureSection';
import Breadcump from '../components/Breadcump';

const ProjectPage = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Breadcump title={"Play Games"}></Breadcump>
            <FeatureSection></FeatureSection>
        </div>
    );
};

export default ProjectPage;