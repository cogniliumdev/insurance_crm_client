import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const insuranceCRMApi = createApi({
    reducerPath: "insuranceCRMApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
    endpoints: (builder) => ({

        // user profile 
        getUserProfile: builder.query({
            query: () => "userProfile/getProfile"
        }),


    }),

});


export const {
    useGetUserProfileQuery
} = insuranceCRMApi;


