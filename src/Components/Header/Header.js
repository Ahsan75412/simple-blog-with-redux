import React from 'react';
import topImage from '../../../src/Images/top-bg.png'

const Header = () => {
    return (
        <div className='flex items-center bg-[#E4E5E9] h-screen flex-col md:flex-row sm:w-full '>
            <div className='md:w-3/6 md:px-16 px-10'>
                <h1 className='md:font-semibold text-3xl md:text-5xl py-5 text-start'>Hi, I'm Mridul <span className='block'>Front End Dev</span></h1>


                <p className='text-justify text-zinc-600'> I am a MERN Stack Developer and Web Designer who is passionate about making error free website with 100% client satisfaction.i have a passion for learning and sharing my knowledge.I try to learn something new every day.</p>
                <div className='flex my-5'>
                    <input type="text" className='border-2 rounded p-2  ' placeholder='Enter your email..' />
                    <button class="rounded bg-[#6246Ea] mx-3 p-2 text-white font-medium">Subscribe</button>
                </div>

            </div>
            <div className='md:w-3/6 '>
                <img src={topImage} alt="" />
            </div>
        </div>
    );
};

export default Header;