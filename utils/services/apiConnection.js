import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiHeaders = {
  Accept: "application/json",
};
const baseUrl = "http://localhost:3000";
const createRequest = (url, method) => ({ url, headers: ApiHeaders, method });
const postRequest = (url, method, body) => ({
  url,
  headers: ApiHeaders,
  method,
  body: JSON.stringify(body),
});
const apiConnection = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Post", "Get"],

  endpoints: (builder) => ({
    getData: builder.query({
      query: () => createRequest("/api/get", "GET"),
      transformResponse: (response) => response.data,
      providesTags: ["Get"],
    }),
    postData: builder.query({
      query: (payload) => postRequest("/api/post", "Post", payload),
      providesTags: ["Post"],
    }),
  }),
});
export const { useGetDataQuery, usePostDataQuery } = apiConnection;
export default apiConnection;
