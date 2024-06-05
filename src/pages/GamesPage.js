import React from 'react';
import CategorySection from '../components/CategorySection';
import Breadcump from '../components/Breadcump';

const GamesPage = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Breadcump title={"Feture Games"}></Breadcump>
            <CategorySection></CategorySection>
        </div>
    );
};

export default GamesPage;