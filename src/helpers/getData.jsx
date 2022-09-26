import axios from "axios";

const API_KEY = "4e997d9f74601693c84e243277b61d66";
axios.defaults.baseURL ="https://api.themoviedb.org/3";

const requestConfig = {
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
};

export const getData = async (key, params) => {

    function queryParams () { 
            switch (key) {
        case "trending": 
            return `${key}/movie/${params}`;
        case "search": 
            return `${key}/movie?query=${params}`;
        case "credits": 
            return `movie/${params}/${key}`;
        case "reviews": 
            return `movie/${params}/${key}`;
            
        default:
            return `movie/${params}`
       
    }
}
    const response = await axios.get(queryParams(), requestConfig)
    return response.data
}

    



