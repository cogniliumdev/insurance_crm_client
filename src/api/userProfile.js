import api from "./apiConfig";
import { useQuery } from "react-query";


const getUserProfile = async () => {
    const res = await api.get("/userProfile/getProfile");
    return res.data;
}

const useGetUserProfileQuery = () => {
    return useQuery("user-profile", getUserProfile,
        {
            cacheTime: 30000,// 30 Seconds
        }
    );
}

export {
    useGetUserProfileQuery
};