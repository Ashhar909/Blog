import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error,setError] = useState(null);

    const abortCont = new AbortController();
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url, { signal : abortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error("Could not fetch the data from the resource")
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIspending(false);
                    // if fetch succesful getting rid of the error
                    setError(null);
                })
                .catch(err => {
                    if(err.name ==="AbortError"){
                        console.log("fetch aborted")
                    }
                    else{
                        setError(err.message);
                        setIspending(false);
                    }
                })
        }, 1000)

    return () => abortCont.abort()
    }, [url])

    return { data, isPending, error }
}
 
export default useFetch;