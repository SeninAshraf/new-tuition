"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {user}=useUser();
    useEffect(()=>{
        CreateNewUser();
    },[user])
    const CreateNewUser = async() =>{
        const result=await axios.post('/aoi/users');
        console.log(result.data);
    }
  return (
    <div>{children}</div>
  )
}

export default Provider