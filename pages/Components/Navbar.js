import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "../../styles/navbar.module.css";

export default function Navbar() {



    const [menu, setMenu] = useState(false)
    console.log(menu)
    const handleclick = () => {
        setMenu(!menu)
    }
    return (
        <>

            <div className="bg-gray-900">
                <div className="px-5 lg:px-0 sm:max-w-xl md:max-w-4xl mx-auto flex justify-between items-center h-16   text-white">
                    <h2 className="  text-rose-500 cursor-pointer">E-Learn</h2>
                    <div className="hidden md:block">
                        <div className="flex list-none	md:space-x-6 ">
                            <Link className="transform hover:scale-105 duration-200 hover:text-rose-500" href="/home">Home</Link>
                            <Link className="transform hover:scale-105 duration-200 hover:text-rose-500" href="/story">Story</Link>
                            <Link className="transform hover:scale-105 duration-200 hover:text-rose-500" href="/allcourses">Courses</Link>
                            <Link className="transform hover:scale-105 duration-200 hover:text-rose-500" href="/aboutus">About Us</Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className=" flex space-x-4 items-center">
                            <Link href="/login"><button className="transform hover:scale-105 duration-200 hover:text-rose-500">Login</button></Link>
                            <Link href="/signup"><button className="transform hover:scale-105   primary-border font-medium text-gray-900 bg-gray-100 border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-200 transition-all duration-500 hover:border-gray-200">Sign Up</button></Link>
                        </div>
                    </div>

                    <div className="md:hidden">

                        <button onClick={() => handleclick()}> {!menu ? <AiOutlineMenu /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                        </svg>} </button>



                    </div>




                </div>
                {/* <div className="text-gray-100 flex flex-col list-none	md:space-x-6 hidden ">
                    <li><a href="" className="  ">Home</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Course</a></li>
                    <li><a href="">About Us</a></li>
                </div> */}

                {menu ?
                    <div className="">
                        <div className="md:hidden text-gray-100 flex flex-col list-none justify-center w-full  space-y-1 h-screen">
                            <Link href="/home" className="transform transition-all duration-500 hover:bg-rose-500 hover:text-gray-100 border-t-2 border-b-2 py-1 text-center"> Home</Link>
                            <Link href="/story" className=" transform transition-all duration-500 hover:bg-rose-500 hover:text-gray-100 border-b-2 text-center  pb-1">Story</Link>
                            <Link href="/allcourses" className="transform transition-all duration-500 hover:bg-rose-500 hover:text-gray-100 text-center border-b-2  pb-1">Course</Link>
                            <Link href="/aboutus" className="transform transition-all duration-500 hover:bg-rose-500 hover:text-gray-100  border-b-2 text-center  pb-1">About Us</Link>
                            <Link href="/login" className="transform transition-all duration-500 hover:bg-rose-500 hover:text-gray-100  border-b-2 text-center  pb-1">Login</Link>
                            <Link href="/signup" className="transform transition-all duration-500 hover:bg-rose-500 hover:text-gray-100 border-b-2 text-center pb-1">Signup</Link>
                        </div>
                    </div> :
                    <div className="text-gray-100 flex flex-col list-none hidden 	md:space-x-6 mx-auto ">
                        <li><a href="" className=" text-center  ">Home</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Course</a></li>
                        <li><a href="">About Us</a></li>
                    </div>
                }

            </div>

        </>
    )
}
