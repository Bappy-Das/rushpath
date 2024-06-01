import React from 'react';
import BlogSection from '../components/BlogSection';
import Breadcump from '../components/Breadcump';

const BlogPage = () => {
    return (
        <div>
            <Breadcump title={"Blog"}></Breadcump>
            <BlogSection></BlogSection>
        </div>
    );
};

export default BlogPage;