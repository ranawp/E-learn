import Brandnames from "./Components/Brandnames";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Qestion from "./Components/Qestion";



const Home = () => {
    return (
        <>
            <Navbar />
            <Header></Header>
            <Brandnames></Brandnames>
            <Qestion></Qestion>
            <Courses></Courses>
        </>
    );
};

export default Home;