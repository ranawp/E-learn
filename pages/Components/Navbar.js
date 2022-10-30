import Image from "next/image";
import styles from "../../styles/navbar.module.css";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-around items-center h-16  bg-gray-900 text-white ">
                <h2 className="text-rose-500 cursor-pointer">E-Learn</h2>
                <div className="flex items-center list-none	space-x-6 ">
                    <li><a href="" className="   transform hover:scale-125 transition ">Home</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Course</a></li>
                    <li><a href="">About Us</a></li>
                </div>
                <div className="flex items-center space-x-4">
                    <button>Login</button>
                    <button className="primary-button font-medium text-gray-900 bg-gray-100">Sign Up</button>
                </div>

            </div>

        </>
    )
}
