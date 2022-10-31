import Image from 'next/image';
import React from 'react';

const Courses = () => {
    return (
        <div className='bg-rose-50 py-10  '>
            <div className=' max-w-4xl mx-auto '>
                <h2 className='font-bold text-3xl text-center'>We Provide Many Types of Course</h2>
                <p className='text-center mt-3'> We help you to devolpe your skills that you can growth your carrer in right way.</p>
                {/* <div className='text-center space-x-6 mt-5'>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Design</button>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Carrer</button>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Marketing</button>
                    <button className='primary-border text-rose-500 font-bold bg-rose-300 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500'>Development</button>
                </div> */}

                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-20 mx-auto lg:ml-20 lg:mr-20 mt-10 px-10 lg:px-0'>
                    <div className='bg-gray-50 w-48 transform hover:scale-105 duration-500'>
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
                    <div className='bg-gray-50 w-48 transform hover:scale-105 duration-500'>
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
                    <div className='bg-gray-50 w-48 transform hover:scale-105 duration-500'>
                        <Image className="" src='/SEO.jpg' width={250} height={350} alt="student-image" ></Image>
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
            </div>
        </div>
    );
};

export default Courses;

