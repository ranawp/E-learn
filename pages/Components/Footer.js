
import { AiFillTwitterCircle, AiOutlineDribbble, AiOutlineFacebook, IconName } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-gray-100 h-full px-2 lg:px-0">
            <div className="grid  grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto lg:gap-24 pt-16 pb-10 ">
                <div>
                    <h3 className="font-bold text-lg">E-learn</h3>
                    <p>Grave your oportunity. </p>
                    <p className="mt-3">Contact us</p>

                    <div className="flex space-x-3 ">
                        <a className="transform hover:scale-105 duration-500" href="#"><AiOutlineFacebook className=" border" /></a>

                        <a className="transform hover:scale-105 duration-500" href="#"> <AiFillTwitterCircle /></a>
                        <a className="transform hover:scale-105 duration-500" href="#"> <AiOutlineDribbble /></a>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Company</h3>
                    <p>About us</p>
                    <p>Team Member</p>

                </div>
                <div>
                    <h3 className="font-bold text-lg">Customer</h3>
                    <p>Courses</p>
                    <p>Sign up</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Clients</h3>
                    <p>Brand</p>
                    <p>guidline</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;