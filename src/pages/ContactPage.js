import React from 'react';
import ContactSection from '../components/ContactSection';
import Breadcump from '../components/Breadcump';

const ContactPage = () => {
    return (
        <div>
            <Breadcump title={"Contact Us"}></Breadcump>
            <ContactSection></ContactSection>
        </div>
    );
};

export default ContactPage;