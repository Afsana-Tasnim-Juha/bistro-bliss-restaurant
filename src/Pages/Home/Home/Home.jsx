import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Number from "../Number/Number";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Banner2></Banner2>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Number></Number>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;