

const Newsteller = () => {
    return (
        <div className="bg-gray-50 pt-20 px-2 lg:px-0">
            <div className="py-10 max-w-4xl mx-auto ay-900 pt-10 text-center rounded-tl-2xl rounded-br-2xl bg-gray-900">
                <h2 className="text-gray-100  lg:text-2xl pt-7">Subscribe for Get Update Every <br /> New Courses</h2>
                <div className="mt-3 relative lg:w-72 w-60 md:w-64 mx-auto">
                    <input className="placeholder:pl-3 py-2 w-60 lg:w-72 md:w-64  rounded-tl-2xl rounded-br-2xl focus:outline-none" type="email" placeholder="Email" />
                    <button className="shring-0 top-1 mr-1 px-4 py-1 bg-rose-500 text-gray-100 rounded-tl-2xl rounded-br-2xl absolute right-0 hover:bg-gray-200 hover:text-gray-900 hover:ring-2 hover:ring-rose-500  transition-all duration-500">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsteller;