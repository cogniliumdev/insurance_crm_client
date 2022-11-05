import api from "./apiConfig";
import { useMutation, useQueryClient } from "react-query";



const addWebsite = async (obj) => {
    const { website, id } = obj;
    const res = await api.post("/website/createWebsite", { website: website, userProfileId: id });
    return res.data;
}

const useCreateWebsiteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(addWebsite, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const deleteWebsite = async (id) => {
    const res = await api.delete(`/Website/deleteWebsite/${id}`);
    return res.data;
}
const useDeleteWebsiteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteWebsite, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const updateWebsite = async (obj) => {
    const { website, id } = obj;
    console.log(obj);
    const res = await api.patch("/website/updateWebsite", { website, websiteId: id });
    return res.data;
}

const useUpdateWebsiteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateWebsite, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    });
}

export {
    useCreateWebsiteMutation,
    useDeleteWebsiteMutation,
    useUpdateWebsiteMutation
};