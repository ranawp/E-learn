import Image from 'next/image';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const aboutus = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3 className='mt-10 text-center font-bold text-2xl'>About Us</h3>
            <div className='grid md:grid-cols-2 mt-10 max-w-4xl mx-auto '>
                <div>
                    <Image src='/teams.jpg' width={400} height={400} alt="student-image" className='transform hover:scale-105 duration-500 rounded-bl-lg rounded-tr-lg '></Image>
                </div>
                <div>
                    <h2 className='font-bold'>Our Misson</h2>
                    <p>We will support our socity to accheive thier goal.Our company will provide world class service to client</p>

                    <h2 className='font-bold mt-5'>Our Vison</h2>
                    <p>Everybody must be know about ourselves in the world. We motivate to people get success.</p>
                </div>
            </div>
            <h1 className='mt-16 text-center text-2xl font-bold'>Our Team Members</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mx-auto lg:ml-20 lg:mr-20 mt-10 mb-16'>
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
                    <Image src='/menor4.jpeg' width={280} height={360} alt="student-image" className='rounded-bl-lg rounded-tr-lg'></Image>
                    <div>
                        <h3 className='text-lg font-bold'>Jons Milton</h3>
                        <p>Brand ambassador </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default aboutus;