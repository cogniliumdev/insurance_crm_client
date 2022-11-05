import api from "./apiConfig";
import { useQuery, useMutation, useQueryClient } from "react-query";


const getUserProfile = async () => {
    const res = await api.get("/userProfile/getProfile");
    return res.data;
}

const useGetUserProfileQuery = () => {
    return useQuery("user-profile", getUserProfile,
        {
            cacheTime: 30000,// 30 Seconds
            refetchOnWindowFocus: false,
        }
    );
}


const updateUserProfile = async (obj) => {
    console.log(obj.birth_date);
    const response = await api.patch("/userProfile/updateProfile", obj);
    return response.data;
};

const useUpdateUserProfileMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateUserProfile, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    });
};


export {
    useGetUserProfileQuery,
    useUpdateUserProfileMutation
};