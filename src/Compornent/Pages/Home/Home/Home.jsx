import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses"
import StudentCount from "../StudentCount/StudentCount";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RsSportClub || Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor />
            <StudentCount />
        </div>
    );
};

export default Home;