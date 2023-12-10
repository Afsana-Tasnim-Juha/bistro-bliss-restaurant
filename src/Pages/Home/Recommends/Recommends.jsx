import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import c1 from "../../../assets/home/slide1.jpg"
import c2 from '../../../assets/home/slide2.jpg';
import c3 from '../../../assets/home/slide4.jpg';
const Recommends = () => {
    return (
        <section>
            <SectionTitle heading="CHEF RECOMMENDS"
                subHeading="Should Try">

            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={c1} alt="Shoes" className="rounded-xl w-[400px] h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className="text-xs">Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan cheese combine in the classic Caesar salad</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506] ">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={c2} alt="Shoes" className="rounded-xl w-[400px] h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza</h2>
                        <p className="text-xs">Thin crust, tomato sauce, mozzarella, and your favorite toppings make the classic pizza delight.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506] ">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={c3} alt="Shoes" className="rounded-xl w-[400px] h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">desserts</h2>
                        <p className="text-xs">A delightful cake requires flour, sugar, eggs, butter, baking powder, and vanilla extract.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506] ">add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Recommends;