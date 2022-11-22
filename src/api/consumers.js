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

const getSingleConsumer = async (consumerId) => {
    const res = await api.get(`/consumer/getSingleConsumer/${consumerId}`);
    return res.data;
}
const useGetSingleConsumerQuery = (consumerId) => {
    return useQuery(["consumers", consumerId], () => getSingleConsumer(consumerId), {
        cacheTime: 300000,// 3 hrs
        refetchOnWindowFocus: false,
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

const updateConsumer = async (consumerObj) => {
    const res = await api.patch("/consumer/updateConsumer", consumerObj);
    return res.data;
};
const useUpdateConsumerMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateConsumer, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consumers'] })
        }
    });
}

export {
    useGetAllConsumersQuery,
    useCreateConsumerMutation,
    useDeleteConsumerMutation,
    useUpdateConsumerMutation,
    useGetSingleConsumerQuery
}