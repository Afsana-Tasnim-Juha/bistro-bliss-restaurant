import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";



const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useAuth();
    const Navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();

    const hAndleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //refetch cart to update the cart items count
                        refetch()
                    }
                })


        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page
                    Navigate('/login', { state: { from: location } })
                }
            });

        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end ">
                    <button
                        onClick={hAndleAddToCart}
                        className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div >
    );
};

export default FoodCard;