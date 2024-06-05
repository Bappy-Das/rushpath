import React from 'react';
import ContactSection from '../components/ContactSection';
import Breadcump from '../components/Breadcump';

const ContactPage = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Breadcump title={"Contact Us"}></Breadcump>
            <ContactSection></ContactSection>
        </div>
    );
};

export default ContactPage;