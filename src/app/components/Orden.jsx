import { formatToEuros } from '@/helpers'
import Image from 'next/image'
import React from 'react'

const Orden = ({orden}) => {
    const {id,nombre,pedido,total} = orden
  return (
   <div className='border p-10 space-y-5'>
    <h3 className='text-2xl  font-bold'>
      Orden: {id}
     </h3>
     <p className='text-lg font-bold'> Cliente: {nombre} </p>

     <div>
        {pedido.map(element=>
            <div key={element.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
                <div className='w-32'>
                    <Image src={`/assets/img/${element.imagen}.jpg`} width={300} height={200} alt={`Imagen plato ${element.nombre}`}/>
                </div>
                <div className='p-5 space-y-2'>
                    <h4 className='text-xl text-amber-500'>{element.nombre}</h4>
                    <p className='font-bold'>Cantidad: {element.cantidad} </p>
                </div>
            </div>)}
     </div>
     <div className='md:flex md:items-center md:justify-between'>
           <p className=' text-4xl text-amber-500'> Total a pagar: {formatToEuros(total)}</p>
           <button className='bg-blue-600 py-2 px-5 rounded uppercase text-white'> Completar orden</button>
     </div>
   </div>
  )
}

export default Orden