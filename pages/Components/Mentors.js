import Image from 'next/image';
import React from 'react';

const Mentors = () => {
    return (
        <div className='bg-gray-900 h-screen '>
            <div className="my-20 max-w-4xl mx-auto  grid grid-cols-2 pt-16">
                <div className=''>
                    <h1 className='text-gray-100 text-3xl font-bold'>Why Online <br /> Learning Menthod </h1>
                </div>
                <div>
                    <p className='text-gray-100 leading-7 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> a voluptas excepturi necessitatibus dignissimos.</p>
                    <button className='primary-border mt-5 text-gray-100 bg-rose-500 '>Get Started</button>
                </div>
            </div>
            <div className='grid grid-cols-4 mx-auto ml-20 mr-20 gap-1'>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg'>
                    <Image src='/mentor1.jpg' width={300} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>professor</p>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg'>
                    <Image src='/mentor1.jpg' width={280} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>professor</p>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg'>
                    <Image src='/mentor1.jpg' width={280} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>professor</p>
                    </div>
                </div>
                <div className='bg-gray-50 w-48 p-2 rounded-bl-lg rounded-tr-lg'>
                    <Image src='/mentor1.jpg' width={250} height={350} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>professor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentors;