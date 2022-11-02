import api from "./apiConfig";
import { useMutation, useQueryClient } from "react-query";



const addEmail = async (obj) => {
    const { email, id } = obj;
    const res = await api.post("/email/createEmail", { email: email, userProfileId: id });
    return res.data;
}

const useCreateEmailMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(addEmail, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const deleteEmail = async (id) => {
    const res = await api.delete(`/email/deleteEmail/${id}`);
    return res.data;
}
const useDeleteEmailMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteEmail, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}


const updateEmail = async (obj) => {
    const { email, id } = obj;
    const res = await api.patch("/email/updateEmail", { email: email, emailId: id });
    return res.data;
}

const useUpdateEmailMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateEmail, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-profile'] })
        }
    })
}

export {
    useCreateEmailMutation,
    useDeleteEmailMutation,
    useUpdateEmailMutation
};