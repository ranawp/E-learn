import Brandnames from "./Components/Brandnames";
import Courses from "./Components/Courses";
import CoursesBooking from "./Components/CoursesBooking";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Mentors from "./Components/Mentors";
import Navbar from "./Components/Navbar";
import Newsteller from "./Components/Newsteller";
import Qestion from "./Components/Qestion";



const Home = () => {
    return (
        <>
            <Navbar />
            <Header></Header>
            <Brandnames></Brandnames>
            <Qestion></Qestion>
            <Courses></Courses>
            <Mentors></Mentors>
            <CoursesBooking></CoursesBooking>
            <Newsteller></Newsteller>
            <Footer />
        </>
    );
};

export default Home;