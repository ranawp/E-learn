import Link from 'next/link';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


export const getStaticProps = async () => {
    const res = await fetch("https://dummyjson.com/posts")
    const data = await res.json();
    // console.log("data", data)

    return {
        props: {
            data,
        },
    };
};

const blog = ({ data }) => {
    console.log(data.posts)
    return (
        <>
            <Navbar></Navbar>

            <div className=' overflow-hidden'>
                <h1 className='text-center font-bold text-xl mt-10'>Stories</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-5 px-3 lg:px-0 mb-16'>
                    {
                        data?.posts?.slice(0, 10).map((alldata) => {
                            return (
                                <div className="drop-shadow-md bg-white p-3" key={alldata?.id} >
                                    <h3 ><span className='font-bold pr-1'>Title:</span>{alldata?.title}</h3>
                                    <p ><span className='font-semibold pr-1'>
                                        Tags:</span>{alldata?.tags[0]}</p>
                                    <Link href={`/blog/${alldata.id}`}><button className=' duration-500 primary-border mt-5 text-gray-100 bg-rose-500 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all '>Details</button></Link>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>

        </>
    );
};

export default blog;