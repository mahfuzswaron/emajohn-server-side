import React from 'react';

const Footer = () => {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <footer>
            <p className='text-center mt-5' >&#169; mahfuz swaron, {date} </p>
        </footer>
    );
};

export default Footer;