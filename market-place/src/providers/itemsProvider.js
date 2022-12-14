import { useEffect, useState } from "react";


export const getItems = async () => {
    console.log("getItems")
    return await fetchFromServer('item');
}

export const getItem = async (id) => {
    return fetchFromServer(`item/${id}`);
}

export const sendPurchase = async (purchase) => {
    return fetchFromServer(`purchase`, "POST", purchase);
};

export const fetchFromServer = async (url = "", method = "GET", body) => {
    try {
        const response = await fetch('http://localhost:4000/' + url, {
            method, 
            headers: {
                'content-type': 'application/json'
            },
            body: body ? JSON.stringify(body) : undefined
        });

        if (!response.ok) throw "not ok error";

        return await response.json();

    } catch (e) {
        console.log(e);
    }
}

export const useHttp = (fetchFunc, fetchOnMount = false) => {
    const [value, setValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const requestValue = async () => {
        setIsLoading(true);
        const data = await fetchFunc();
        setIsLoading(false);

        setValue(data);
    }

    useEffect(() => {
        if (fetchOnMount) requestValue();
    }, [])

    return {value, requestValue, isLoading};
}