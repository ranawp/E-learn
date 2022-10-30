import Image from 'next/image';
import React from 'react';

const CoursesBooking = () => {
    return (
        <div className='bg-gray-50 h-screen '>
            <div className='max-w-4xl mx-auto pt-20 grid grid-cols-2 '>
                <div>
                    <h2 className='text-xl font-bold'>Book Our Courses & <br /> Improve your Skill.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, perspiciatis!</p>
                    <button className='primary-border mt-5 text-gray-100 bg-rose-500 '>Booking</button>
                    <div className='grid grid-cols-2 mt-5'>
                        <div className=' border-l-4 border-gray-300 '>
                            <h2>533K+ Subscribe</h2>
                            <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing</p>
                        </div>

                        <div className='border-l-4 border-gray-300'>
                            <h2>53K+ Students</h2>
                            <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing</p>
                        </div>

                    </div>
                </div>
                <div className=' flex justify-end'>
                    <Image src='/mentor1.jpg' width={300} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                </div>
            </div>
        </div>
    );
};

export default CoursesBooking;