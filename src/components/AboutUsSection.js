import React from 'react';

const AboutUsSection = () => {
    return (
        <div className='rushpath_primary_bg'>
            <div className="mx-auto w-full max-w-screen-xl p-4 md:py-20 lg:py-20">
                <div className='flex justify-center flex-col gap-4'>
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-class-brick mb-12 rushpath_secondary">
                        Welcome to Rushpath: Where learning is entertaining!
                    </h1>
                    <p className="text-gray-800 font-normal text-lg mt-7">
                        We believe education shouldn't feel like a chore. That's why we create interactive games that make acquiring new skills fun and engaging.
                    </p>
                    <h1 className='rushpath_secondary text-xl font-bold'>Our Mission : </h1> 
                    <p>Make learning entertaining for everyone, from school students to university whizzes and industry professionals.</p>
                    <h1 className='rushpath_secondary text-xl font-bold'>Level Up Your Skills! </h1>
                    <p>Rushpath offers a variety of games across different subjects, from arts and science to math, biology, chemistry, physics, and more!  We cater to all learning levels, helping you build a foundation in core concepts and progress to mastery.</p>
                    <h1 className='rushpath_secondary text-xl font-bold'>Learning Never Stops!</h1>
                    <p>Whether you're a student or an industry professional looking to develop new skills, Rushpath is your one-stop shop for entertaining education.  This is just the beginning of our journey, so stay tuned for exciting new games and learning adventures!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;