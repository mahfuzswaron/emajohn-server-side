import React from 'react';
// import banner from '../../../../images/banner.png';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-center '>
             <img src="images/banner.png" alt='banner' />
            </div>
            <article>
               <Services></Services>
            </article>
        </div>
    );
};

export default Home;