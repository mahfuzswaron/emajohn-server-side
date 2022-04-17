import React from 'react';
import banner from '../../../../images/banner.png'

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-center '>
             <img src={banner} alt='banner' />
            </div>
        </div>
    );
};

export default Home;