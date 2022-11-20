import { useQuery, useMutation, useQueryClient } from "react-query";
import api from "./apiConfig"

const getAllconsumers = async () => {
    const res = await api.get("/consumer/getAllConsumer");
    return res.data;
}

const useGetAllConsumersQuery = () => {
    return useQuery("consumers", getAllconsumers, {
        cacheTime: 30000,// 30 Seconds
        refetchOnWindowFocus: true,
    });
}

const createConsumer = async (obj) => {
    const res = await api.post("consumer/createConsumer", obj);
    return res.data;
}

const useCreateConsumerMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(createConsumer, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consumers'] })
        }
    });
}

const deleteConsumer = async (id) => {
    const res = await api.delete(`/consumer/deleteConsumer/${id}`);
    return res.data;
}

const useDeleteConsumerMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteConsumer, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consumers'] })
        }
    });
}

export {
    useGetAllConsumersQuery,
    useCreateConsumerMutation,
    useDeleteConsumerMutation
}