import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, subTitle, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} subTitle={subTitle} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="card-actions justify-center mb-2">
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506] ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;