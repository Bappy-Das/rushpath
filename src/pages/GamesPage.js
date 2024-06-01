import React from 'react';
import CategorySection from '../components/CategorySection';
import Breadcump from '../components/Breadcump';

const GamesPage = () => {
    return (
        <div>
            <Breadcump title={"Feture Games"}></Breadcump>
            <CategorySection></CategorySection>
        </div>
    );
};

export default GamesPage;