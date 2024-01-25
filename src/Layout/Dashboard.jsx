import { MdShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome, IoMenu } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
//import useCarts from "../hooks/useCarts";

const Dashboard = () => {
    //const [cart] = useCarts();
    //TODO: get isAdmin value  from the database 
    const isAdmin = true;

    return (
        <div className="flex">
            {/* deshboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054B2]">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>

                                    <NavLink to="/dashboard/adminHome">
                                        <IoHome />
                                        Admin Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils />
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <MdFormatListBulleted />
                                        Manage Items</NavLink>
                                </li>

                                <li>

                                    <NavLink to="/dashboard/bookings">
                                        <FaBook></FaBook>
                                        Manage Bookings</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/users">
                                        <FaUsers />
                                        All Users</NavLink>
                                </li>

                            </>
                            :
                            <>
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
                            </>
                    }
                    <div className="divider"></div>
                    {/* Shared Nav links */}
                    <li>

                        <NavLink to="/">
                            <IoHome />
                            User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/order/menu">
                            <IoMenu />
                            Menu</NavLink>
                    </li>
                    <li>

                        <NavLink to="/order/menu">
                            <BiSolidContact />
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/**
             * dashboard content
             */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;