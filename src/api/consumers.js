import { useQuery, useMutation } from "react-query";
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


export {
    useGetAllConsumersQuery,

}