import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserView() {
    let params = useParams();
    let [data,setdata]=useState({})
    useEffect(()=>{
        getdata();
    },[]);
    let getdata=async()=>{
        let userdata=await axios.get(`https://61eeed07d593d20017dbb208.mockapi.io/form/userdata/${params.id}`);
        let data=userdata.data;
        console.log(data);
        setdata(data);
        
    }
    return (
        <>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">User View {params.id}</h1></div>
         <p>Name : {data.name}</p>
         <p>Email : {data.email}</p>
         <p>Mobile : {data.mobile}</p>
         <p>Address : {data.address}</p>
         <p>Country : {data.country}</p>
         <p>State : {data.state}</p>
         <p>City : {data.city}</p>
        </>
      

    )
}
export default UserView;
