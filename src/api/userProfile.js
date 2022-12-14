import api from "./apiConfig";
import { useQuery, useMutation, useQueryClient } from "react-query";
import authHeader from "../services/auth-header";
import axios from "axios";



const getUserProfile = async () => {
    const res = await api.get("/userProfile/getProfile");
    return res.data;
}

const useGetUserProfileQuery = () => {
    return useQuery("user-profile", getUserProfile,
        {
            cacheTime: 30000,// 30 Seconds
            refetchOnWindowFocus: true,
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


const createUserProfile = async (obj) => {
    const res = await api.post("/userProfile/createProfile", obj);
    return res.data;
};

const useCreateUserProfileMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(createUserProfile, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    });
};

export {
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
    useCreateUserProfileMutation,
    getUserProfile
};