import { useMutation, useQueryClient } from "react-query";
import api from "./apiConfig";


const addTag = async (tagObj) => {
    const res = await api.post("/consumerTag/createConsumerTag", tagObj);
    return res.data;
};

const useAddConsumerTagMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(addTag, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["consumers"] })
        }
    });
};

const deleteTag = async (id) => {
    const res = await api.delete(`/consumerTag/deleteConsumerTag/${id}`);
    return res.data;
};

const useDeleteConsumerTagMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTag, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["consumers"] })
        }
    });
};

export {
    useAddConsumerTagMutation,
    useDeleteConsumerTagMutation
};