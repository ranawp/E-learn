import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const signup = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-2xl text-center mt-16'>Sign Up</h1>
            <div className='grid md:grid-cols-2 max-w-4xl mx-auto mt-10 px-10'>

                <div className='mb-16'>

                    <div>
                        <label htmlFor="">Name</label> <br />
                        <input className='bg-gray-100 border-2 focus:outline-none' type="text" required /> <br />
                        <div className='mt-3'>
                            <label htmlFor="">Email</label> <br />
                            <input className='bg-gray-100 border-2 focus:outline-none' type="email" required /></div>
                        <p className='mt-3 space-y-10' htmlFor="">Passowrd</p>
                        <input required className='bg-gray-100 border-2 focus:outline-none ' type="text" /> <br />
                        <button className=' duration-500 primary-border mt-5 text-gray-100 bg-rose-500 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all'>SignUp</button> <br />
                        <div className='mt-2'>
                            <span>Already have an account?</span> <span> <Link href="/login">Login</Link> </span>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Image src='/signup.jpg' width={400} height={400} alt="sign-image" className='rounded'></Image>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default signup;