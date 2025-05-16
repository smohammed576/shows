import { createContext, useEffect, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const key = import.meta.env.VITE_APIKEY;
    useEffect(() => {
        (async () => {
            const [response] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`).then(response => response.json())
            ]);
            setData(response);
        })();
    }, []);

    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export {DataProvider};