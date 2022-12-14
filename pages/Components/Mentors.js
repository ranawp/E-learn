import Image from 'next/image';
import React from 'react';

const Mentors = () => {
    return (
        <div className='bg-gray-900 h-full px-2 lg:px-0 pb-10'>
            <div className="my-20 max-w-4xl mx-auto  grid grid-cols-2 pt-16">
                <div className=''>
                    <h1 className='text-gray-100 text-3xl font-bold'>Why Online <br /> Learning Menthod </h1>
                </div>
                <div>
                    <p className='text-gray-100 leading-7 '>We provide you world class mentor and lifetime support so that you can growth your carrer in right way. </p>
                    <button className='duration-500 primary-border mt-5 text-gray-100 bg-rose-500 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all '>Get Started</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mx-auto lg:ml-20 lg:mr-20 '>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg transform hover:scale-105 duration-500'>
                    <Image src='/mentor1.jpg' width={300} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg '></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>Graphic Designer</p>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg transform hover:scale-105 duration-500'>
                    <Image src='/mentor2.jpeg' width={280} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Marsho</h3>
                        <p>WEb develoer</p>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg transform hover:scale-105 duration-500'>
                    <Image src='/mentor3.jpeg' width={280} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>Mathmatics</p>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg transform hover:scale-105 duration-500'>
                    <Image src='/menor4.jpeg' width={250} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>Brand ambassador </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentors;