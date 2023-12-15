import { MdShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const Dashboard = () => {
    return (
        <div className="flex">
            {/**
             * Deshboard side bar
             */}
            <div className="w-64 min-h-screen bg-[#D1A054B2]">
                <ul className="menu p-4">
                    <li>

                        <NavLink to="/dashboard/userHome">
                            <IoHome />
                            User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/reservation">
                            <MdOutlineDateRange />
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <MdOutlinePayment />
                            Payment History</NavLink>
                    </li>

                    <li>

                        <NavLink to="/dashboard/cart">
                            <MdShoppingCart></MdShoppingCart>
                            My Cart</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/review">
                            <MdOutlineRateReview />
                            Add Review</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/bookings">
                            <TbBrandBooking />
                            My Bookings</NavLink>
                    </li>
                </ul>
            </div>
            {/**
             * dashboard content
             */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;