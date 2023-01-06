import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { BiCard } from 'react-icons/bi';

const Category = () => {
    return (
        <div className='bg-[#E4E5E9]'>
            <div className=' p-5 flex justify-between my-14'>
                <div className='font-semibold'>
                    <h2>Browse The Category -</h2>
                </div>
                <div className='font-semibold'>
                    <Link href="#">See All Category<IoIosArrowDroprightCircle className=''></IoIosArrowDroprightCircle></Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Category;