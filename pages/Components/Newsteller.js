

const Newsteller = () => {
    return (
        <div className="py-10 max-w-4xl mx-auto bg-gray-900 mt-10 text-center rounded-tl-2xl rounded-br-2xl">
            <h2 className="text-gray-100  text-2xl pt-7">Subscribe for Get Update Every <br /> New Courses</h2>
            <div className="mt-3 relative">
                <input className="placeholder:pl-3 py-2 w-80 rounded-tl-2xl rounded-br-2xl focus:outline-none" type="email" placeholder="Email" />
                <button className="top-1 mr-1 px-4 py-1 bg-rose-500 text-gray-100 rounded-tl-2xl rounded-br-2xl absolute right-72">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsteller;