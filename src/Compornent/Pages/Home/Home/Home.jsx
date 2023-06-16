import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses"
import NewsLetter from "../NewsLetter/NewsLetter";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor />
            <NewsLetter />
        </div>
    );
};

export default Home;