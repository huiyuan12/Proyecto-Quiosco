"use client"
import React, { useEffect, useState } from 'react'
import { useQuiosco } from '../../../context/QuioscoContext'
import { formatToEuros } from '@/helpers'
import { ToastContainer } from 'react-toastify'

const TotalPage = () => {
    const{pedido} = useQuiosco();
    const [enable,disable] = useState(false);
    const {nombre,setNombre,enviarPedido,total,setAdmin,setTotal} = useQuiosco();
    useEffect(()=>{
      setAdmin(false);
    },[])
  if(pedido.length === 0) setTotal(0);
  return (
    <div className='flex flex-col'>
     <h1 className='text-4xl font-black '>
        Total de tu pedido
     </h1>
     <p className='text-2xl my-4'> Confirma tu pedido</p>
        <form onSubmit={enviarPedido}>
            <div className='w-full'>
                <label htmlFor="nombre" className='block uppercase text-slate-500 font-bold text-xl'>Nombre</label>
                <input type="text" id="nombre" className='bg-gray-300 w-full mt-3 rounded-md p-2' 
                value={nombre} onChange={e=>setNombre(e.target.value)}/>
            </div>
            <div className='mt-10'>
                <p>Total a pagar: {""} <span>{ formatToEuros(total)}</span></p>
            </div>
            <div>
                <button type="submit" value="confirmar pedido" className={`${pedido.length===0 || nombre === "" ? "bg-indigo-100 cursor-not-allowed" : "bg-indigo-700 cursor-pointer"} mt-10 w-full px-5 py-2 rounded uppercase font-bold text-white `}
                disabled={pedido.length===0 || nombre === ""}>Confirmar pedido</button>
            </div>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default TotalPage