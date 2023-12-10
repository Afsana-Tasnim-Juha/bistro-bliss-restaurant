import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-[#FFF] pt-8 my-20">
            <SectionTitle heading="Check it out"
                subHeading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-opacity-80 px-36 py-20 pt-12">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>November 10,2024</p>
                    <p className="uppercase">
                        WHERE CAN I GET SOME?</p>
                    <p>
                        If you are looking to experience the culinary delights of Bistro Boss, you can find our restaurant at [insert address]. Join us for an unforgettable dining experience where taste meets warmth, and every meal is a masterpiece. Our doors are open, and we look forward to welcoming you to Bistro Boss soon!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;