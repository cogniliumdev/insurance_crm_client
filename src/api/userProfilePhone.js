import api from "./apiConfig";
import { useMutation, useQueryClient } from "react-query";



const addPhone = async (obj) => {
    const { phone, id } = obj;
    const res = await api.post("/phone/createPhone", { phone: phone, userProfileId: id });
    return res.data;
}

const useCreatePhoneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(addPhone, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const deletePhone = async (id) => {
    const res = await api.delete(`/phone/deletePhone/${id}`);
    return res.data;
}
const useDeletePhoneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deletePhone, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const updatePhone = async (obj) => {
    const { phone, id } = obj;
    const res = await api.patch("/phone/updatePhone", { phone: phone, phoneId: id });
    return res.data;
}

const useUpdatePhoneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updatePhone, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}

export {
    useCreatePhoneMutation,
    useDeletePhoneMutation,
    useUpdatePhoneMutation
};