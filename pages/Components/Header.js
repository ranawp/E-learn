import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className='relative h-screen'>
            <div className='h-96 bg-gray-900'>
                <div className='pt-20 max-w-4xl mx-auto h-screen  grid grid-cols-2'>
                    <div>
                        <h1 className='text-gray-200 text-4xl font-semibold'>Online Learing <br /> you can access <br /> anywhere easily</h1>
                    </div>
                    <div>
                        <p className='text-gray-200 leading-7 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> a voluptas excepturi necessitatibus dignissimos.</p>
                        <button className='primary-border mt-5 text-gray-100 bg-rose-500 '>Get Started</button>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-3  mx-auto absolute bottom-20 left-28'>
                <Image src='/student1.jpg' width={320} height={350} alt="student-image" className='rounded-l-full rounded-br-full'></Image>
                <Image className='mr-10 rounded-t-full rounded-br-full' src='/student2.jpg' width={320} height={350} alt="student-image"></Image>
                <Image className='rounded-tr-full rounded-b-full' src='/student1.jpg' width={320} height={350} alt="student-image"></Image>
            </div>
        </div>
    )
}
