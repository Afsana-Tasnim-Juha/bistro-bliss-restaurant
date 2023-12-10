import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Banner2></Banner2>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;