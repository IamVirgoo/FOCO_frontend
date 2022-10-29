import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {Statistics} from "../slices/statistics";

export const DataMiddleware = createApi({
	reducerPath: "data-middleware",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/api/v1"
	}),
	endpoints: (builder) => ({
		getStat: builder.query<Statistics, void>({
			//TODO: ...
		}),
	}),
})

export const { useGetStat } = DataMiddleware;
