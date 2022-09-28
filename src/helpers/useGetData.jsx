import { useState, useEffect } from "react";
import { getData } from "./getData";

export const useGetData = (key, queryParams) => {
    const [data, setData] = useState(null);
    useEffect(()=>{
    if (!queryParams) return
        getData(key, queryParams)
        .then(setData);
    }, [key, queryParams])
    return [data, setData]
}


