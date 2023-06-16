import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses"
import NewsLetter from "../NewsLetter/NewsLetter";
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
            <NewsLetter />
        </div>
    );
};

export default Home;