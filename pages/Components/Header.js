import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className='relative h-screen'>
            <div className='h-96 bg-gray-900'>
                <div className='pt-20 max-w-4xl mx-auto h-screen  grid grid-cols-2 px-5 lg:px-0'>
                    <div>
                        <h1 className='text-gray-200 md:text-4xl font-semibold'>Online Learing <br /> you can access <br /> anywhere easily</h1>
                    </div>
                    <div>
                        <p className='text-gray-200 leading-7 '>We provide different types of carrer guidline <br /> for your beautiful journey. There has world class mentor.</p>
                        <button className=' duration-500 primary-border mt-5 text-gray-100 bg-rose-500 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all'>Get Started</button>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-3  mx-auto absolute bottom-10 lg:left-28 px-5 lg:px-0 gap-6'>
                <Image src='/student1.jpg' width={320} height={350} alt="student-image" className='transform hover:scale-105 duration-500 rounded-l-full rounded-br-full'></Image>
                <Image className='transform hover:scale-105 duration-500 mr-10 rounded-t-full rounded-br-full' src='/student2.jpg' width={320} height={400} alt="student3"></Image>
                <Image className='transform hover:scale-105 duration-500 rounded-tr-full rounded-b-full' src='/student3.jpeg' width={320} height={350} alt="student-image"></Image>
            </div>
        </div>
    )
}
