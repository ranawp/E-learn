import Image from 'next/image';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const allcourses = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center font-bold text-2xl mt-10'>All courses</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-20 mx-auto lg:ml-20 lg:mr-20 mt-10 px-10 lg:px-0 mb-16'>
                <div className='bg-gray-50 w-48  transform hover:scale-105 duration-500'>
                    <Image src='/digatal.jpg' width={300} height={350} alt="student-image" className=' '></Image>
                    <div className='p-3'>
                        <h3 className='text-lg font-bold'>Marketing</h3>
                        <p>We provide Digital marketing course</p>
                        <div className=' flex justify-between mt-3'>
                            <p className='font-bold md:text-lg'>$130.00</p>
                            <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500 md:text-xs'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 transform hover:scale-105 duration-500'>
                    <Image src='/graphics.jpg' width={280} height={350} alt="student-image" className=''></Image>
                    <div className='p-3'>
                        <h3 className='text-lg font-bold'>Graphis</h3>
                        <p>Highly demand in present situation.</p>
                        <div className=' flex justify-between mt-3'>
                            <p className='font-bold md:text-lg'>$130.00</p>
                            <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500 md:text-xs'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 w-48  transform hover:scale-105 duration-500'>
                    <Image src='/web.jpg' width={280} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div className='p-3'>
                        <h3 className='text-lg font-bold'>Web developent</h3>
                        <p>You have to understand coding.</p>
                        <div className=' flex justify-between mt-3'>
                            <p className='font-bold md:text-lg'>$130.00</p>
                            <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500 md:text-xs'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 w-48  transform hover:scale-105 duration-500'>
                    <Image src='/SEO.jpg' width={250} height={350} alt="student-image" className=''></Image>
                    <div className='p-3'>
                        <h3 className='text-lg font-bold'>SEO</h3>
                        <p>SEO is the heart of the website.</p>
                        <div className=' flex justify-between mt-3'>
                            <p className='font-bold md:text-lg'>$130.00</p>
                            <button className='primary-border border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500 md:text-xs'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default allcourses;