import { useEffect, useState } from "react";

function useFetch(url) {

  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchData=async ()=>{
    try{  const response=await fetch(url);
      const result=await response.json();
      //adding quantity field
      const newData=result.products.map(item=>({...item,quantity:0}))
      setData(newData);
    }
    catch(error){
    setError(error);
    }finally{
      setLoading(false);
    }

  };
  fetchData()},[url])
  return({data,error,loading});
}
export default useFetch;