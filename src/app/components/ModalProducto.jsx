"use client"
import React, { useEffect, useState } from 'react'
import { useQuiosco } from '../../../context/QuioscoContext'
import Image from 'next/image';
import { formatToEuros } from '@/helpers';

const ModalProducto = () => {
    const {changeModal,añadirPedido,pedido,producto} = useQuiosco();
    const [cantidad,setCantidad] = useState(1);
    const [editando,setEditando] = useState(false);
    useEffect(()=>{
       if(pedido.some(element=>element.id===producto.id))
       {
        const productoEditar = pedido.find(element=>element.id===producto.id);
        setCantidad(productoEditar.cantidad)
        setEditando(true);
       }
    },[pedido,producto])
  return (
    <div className='md:flex gap-10'>
        <div className='md:w-1/3'>
            <Image width={300} height={200} alt={`imagen producto ${producto.nombre}`}
            src={`/assets/img/${producto.imagen}.jpg`}></Image>
        </div>
        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button onClick={()=>changeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                </button>
            </div>
            <h1 className='text-3xl font-bold mt-5'> {producto.nombre}</h1>
            <p className='text-2xl text-amber-500 font-bold'>{formatToEuros(producto.precio)}</p>
            <div className='mt-10 flex gap-5'>
                <button type="button"  onClick={()=>{if(cantidad > 1) setCantidad(cantidad-1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
                </button>
                {cantidad}
                <button type="button"  onClick={()=>{if(cantidad < 10) setCantidad(cantidad+1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                </button>
            </div >
            <button onClick={()=>{añadirPedido({...producto,cantidad}); changeModal()}} type="button" className='mt-10 w-3/4 px-5 py-2 bg-blue-600 text-white font-bold uppercase hover:bg-blue-700'>
                {editando? "Guardar cambios" : "Añadir al pedido"}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto