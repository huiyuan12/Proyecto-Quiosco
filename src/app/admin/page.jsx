"use client"
import React, { useEffect, useState } from 'react'
import { useQuiosco } from '../../../context/QuioscoContext'
import axios from 'axios'
import Orden from '../components/Orden'
import { formatToEuros } from '@/helpers'

export const revalidate = 5;
const AdminPage = () => {
  const {setAdmin,admin} = useQuiosco();
  const [ordenes,setOrdenes] = useState([])
  const [dineroCaja,setDineroCaja] = useState(0);
  useEffect(()=>{
    setAdmin(true)   
    const getOrdenes =async()=>{
      const {data} = await axios("/api/ordenes");
      setOrdenes(data);
      
      const dineroEnCaja= data.reduce((total,element)=>total+element.total,0);
      setDineroCaja(dineroEnCaja);
  }
  getOrdenes();
  
  },[])
  useEffect(()=>{
    
  },[])

  return (
   <div className=" container mx-auto w-2/4" >
     <h1 className='text-4xl font-black '>
        Panel administracion
     </h1>
     <p className='text-2xl my-4'> Administra tus ordenes </p>
     <h2 className='mb-5 text-2xl'>Total en caja: <span> {formatToEuros(dineroCaja)} </span> </h2>
    <div className='font-bold'>
    {
      ordenes && ordenes.length? ordenes.map(element=><Orden key={element.id} orden={element}/>):<p>No hay ordenes</p>
     }
     
    </div>
   </div>
  )
}

export default AdminPage