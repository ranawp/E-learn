import Image from 'next/image';
import React from 'react';

const Courses = () => {
    return (
        <div className='bg-rose-50 pt-10'>
            <div className=' max-w-4xl mx-auto '>
                <h2 className='font-bold text-3xl text-center'>We Provide Many Types of Course</h2>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas inventore dolore!</p>
                <div className='text-center space-x-6 mt-5'>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Design</button>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Carrer</button>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Marketing</button>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Development</button>
                </div>

                <div className='grid grid-cols-3 mt-10 '>
                    <div className=' w-60'>
                        <Image width="300" height="300" src="/course.jpeg" alt='courses-photo'></Image>
                        <div className='py-2 px-3 bg-gray-50'>
                            <h2 className='font-bold text-xl'>Degital Marketing</h2>
                            <h4 className='font-bold'>Around 35 Classes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className=' flex justify-between mt-3'>
                                <p className='font-bold text-xl'>$130.00</p>
                                <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-60'>
                        <Image width="300" height="300" src="/course.jpeg" alt='courses-photo'></Image>
                        <div className='py-2 px-3 bg-gray-50'>
                            <h2 className='font-bold text-xl'>Degital Marketing</h2>
                            <h4 className='font-bold'>Around 35 Classes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className=' flex justify-between mt-3'>
                                <p className='font-bold text-xl'>$130.00</p>
                                <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-60'>
                        <Image width="300" height="300" src="/course.jpeg" alt='courses-photo'></Image>
                        <div className='py-2 px-3 bg-gray-50'>
                            <h2 className='font-bold text-xl'>Degital Marketing</h2>
                            <h4 className='font-bold'>Around 35 Classes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className=' flex justify-between mt-3'>
                                <p className='font-bold text-xl'>$130.00</p>
                                <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;