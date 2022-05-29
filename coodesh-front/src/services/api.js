import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux';



export const patientApi =  createApi({
    reducerPath:'patientApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://randomuser.me/'}),
    endpoints:(builder)=>({
        fetchInitial: builder.query({
            query:(page) =>`api/?page=${page}&results=50&seed=foobar`
        })
    })
})


export const {useFetchInitialQuery} = patientApi;