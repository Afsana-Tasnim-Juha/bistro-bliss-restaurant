import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPaused: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;