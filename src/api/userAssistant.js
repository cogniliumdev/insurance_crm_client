import { useMutation, useQueryClient, useQuery } from "react-query";
import api from "./apiConfig";

const getUserAssistant = async () => {
    const res = await api.get("/assistant/getAssistant");
    return res.data;
};

const useGetUserAssistantQuery = () => {
    return useQuery("user-assistant", getUserAssistant,
        {
            refetchOnWindowFocus: false,
            cacheTime: 30000,// 30 Seconds
        }
    );
};


const updateUserAssistant = async (obj) => {
    const res = await api.patch("/assistant/updateAssistant", obj);
    return res.data;
};

const useUpdateUserAssistantMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateUserAssistant,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["user-assistant"] })
            }
        }
    );
}

export {
    useGetUserAssistantQuery,
    useUpdateUserAssistantMutation
};