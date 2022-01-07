import React from 'react';
import Navigation from '../navigation/Navigation';
import Logo from './Logo';

const Home = () => {
    return (
        <div className='header'>
            <header>
                <Navigation />
                <section className='pic_container'>
                    <div className="leftPic"></div>
                    <div className='rightPic'></div>
                </section>
                <Logo />
            </header>
        </div>
    );
};

export default Home;