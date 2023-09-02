"use client"
import Image from 'next/image';
import React, { useContext, useEffect } from 'react'
import QuioscoContext from '../../../context/QuioscoContext';
import { useRouter } from 'next/navigation';

const Categoria = ({categoria}) => {
    const router = useRouter();
    const {handleChangeCategoria,categoriaActual,admin,setAdmin} = useContext(QuioscoContext)
    const {nombre, icono,id}=categoria;
 
  return (
    <>
    {!admin && (
    <div className={`${categoriaActual === categoria? "bg-amber-500":"" } hover:cursor-pointer flex gap-4 items-center border p-5
    hover:bg-amber-500`} onClick={()=>{handleChangeCategoria(categoria); router.push("/")}}>
        <div className='w-10 md:w-32'>
        <Image width={300} height={100}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Imagen de cateogria ${nombre}`}></Image>
        </div>

        <button type="button" className='md:text-2xl font-bold text-xs
        '>{nombre}</button>
    </div>
    )}
    </>
  )
}

export default Categoria