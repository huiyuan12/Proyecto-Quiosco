import { formatToEuros } from '@/helpers';
import Image from 'next/image'
import React from 'react'

import { useQuiosco } from '../../../context/QuioscoContext';
const Producto = ({producto}) => {
    const {handleClickProducto,changeModal} = useQuiosco();
    const{nombre,imagen,precio} = producto;
  return (
    <div className='border md:p-3'>
        <div className='w-20 flex mx-auto md:w-full'>
        <Image src={`/assets/img/${imagen}.jpg`} alt={`Imagen del plato ${nombre}`} width={400} height={500}></Image>
        </div>

        <div className='md:p-5'>
            <h3 className='md:text-2xl text-sm font-bold text-center mt-3'>{nombre}</h3>
            <p className='mt-3 font-black text-amber-300 text-center md:text-4xl '>{
            formatToEuros(precio)}  </p>

            <button type='button' className='bg-indigo-600 hover:bg-indigo-800  text-white font-bold uppercase md:p-3 w-full mt-3'
            onClick={()=>{handleClickProducto(producto); changeModal()}}> Añadir </button>
        </div>
    </div>
  )
}

export default Producto