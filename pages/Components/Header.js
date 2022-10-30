import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className='relative'>
            <div className='h-96 bg-gray-900'>
                <div className='pt-20 max-w-4xl mx-auto h-screen  grid grid-cols-2'>
                    <div>
                        <h1 className='text-gray-200 text-4xl font-semibold'>Online Learing <br /> you can access <br /> anywhere easily</h1>
                    </div>
                    <div>
                        <p className='text-gray-200 leading-7 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> a voluptas excepturi necessitatibus dignissimos.</p>
                        <button className='primary-button mt-5 text-gray-100 bg-rose-500 '>Get Started</button>
                    </div>
                </div>

            </div>
            <div>
                <Image src='student1.png' width={30} height={30}></Image>
            </div>
        </div>
    )
}
