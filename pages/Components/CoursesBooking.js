import Image from 'next/image';
import React from 'react';

const CoursesBooking = () => {
    return (
        <div className='bg-gray-50 h-full px-2 lg:px-0'>
            <div className='max-w-4xl mx-auto pt-20 grid md:grid-cols-2  gap-5'>
                <div>
                    <h2 className='text-xl font-bold'>Book Our Courses & <br /> Improve your Skill.</h2>
                    <p>We providing 20% discount in every courses. You can enroll courses easily. We will give 100% support to get this courses perfectly.</p>
                    <button className='duration-500 primary-border mt-5 text-gray-100 bg-rose-500 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all'>Booking</button>
                    <div className='grid grid-cols-2 mt-5'>
                        <div className='  '>
                            <h2 className='font-bold'>533K+ Subscribe</h2>
                            <p>We earnd lots of subscriber. </p>
                        </div>

                        <div className=''>
                            <h2 className='font-bold'>53K+ Students</h2>
                            <p>Its our great acchivment to get newly students.</p>
                        </div>

                    </div>
                </div>
                <div className=' flex md:justify-end transform hover:scale-105 duration-500'>
                    <Image src='/brandambas.jpg' width={400} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                </div>
            </div>
        </div>
    );
};

export default CoursesBooking;