import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-xl text-center mt-16'>Login</h1>
            <div className='grid md:grid-cols-2 max-w-4xl mx-auto mt-10 px-5 mb-16'>
                <div>
                    <Image src='/login.jpg' width={400} height={400} alt="student-image" className='rounded'></Image>
                </div>
                <div className=''>

                    <div><label htmlFor="">Email</label> <br />
                        <input className='bg-gray-100 border-2 focus:outline-none' type="email" required /> <br />
                        <p className='mt-3 space-y-10' htmlFor="">Passowrd</p>
                        <input required className='bg-gray-100 border-2 focus:outline-none ' type="text" /> <br />
                        <button className=' duration-500 primary-border mt-5 text-gray-100 bg-rose-500 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all'>Login</button> <br />
                        <div className='mt-2'>
                            <span>Don't have an account?</span> <span> <Link href="/signup">Sign up</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default login;