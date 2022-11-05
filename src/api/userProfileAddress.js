import api from "./apiConfig";
import { useMutation, useQueryClient } from "react-query";



const addAddress = async (obj) => {
    const { address, id } = obj;
    const res = await api.post("/address/createAddress", { address: address, userProfileId: id });
    return res.data;
}

const useCreateAddressMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(addAddress, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const deleteAddress = async (id) => {
    const res = await api.delete(`/address/deleteAddress/${id}`);
    return res.data;
}
const useDeleteAddressMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteAddress, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const updateAddress = async (obj) => {
    const { address, id } = obj;
    const res = await api.patch("/address/updateAddress", { address: address, addressId: id });
    return res.data;
}

const useUpdateAddressMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateAddress, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}

export {
    useCreateAddressMutation,
    useDeleteAddressMutation,
    useUpdateAddressMutation
};