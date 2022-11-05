import api from "./apiConfig";
import { useMutation, useQueryClient } from "react-query";



const addSocials = async (obj) => {
    const { socials, id } = obj;
    const res = await api.post("/social/createSocial", { social: socials, userProfileId: id });
    return res.data;
}

const useCreateSocialsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(addSocials, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const deleteSocials = async (id) => {
    const res = await api.delete(`/social/deleteSocial/${id}`);
    return res.data;
}
const useDeleteSocialsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteSocials, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const updateSocials = async (obj) => {
    const { socials, id } = obj;
    const res = await api.patch("/social/updateSocial", { social: socials, socialId: id });
    return res.data;
}

const useUpdateSocialsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateSocials, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}

export {
    useCreateSocialsMutation,
    useDeleteSocialsMutation,
    useUpdateSocialsMutation
};