"use client"
import Link from 'next/link'
import React from 'react'
import { useQuiosco } from '../../../context/QuioscoContext'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
const pasos=[
    {id:1, nombre:"Menu", url:"/"},
    {id:2,nombre:"Resumen",url:"/resumen"},
    {id:3,nombre:"Total",url:"/total"},
]

const Pasos = () => {
    const pathname = usePathname();
   
    const{changePaso} = useQuiosco();
    let progreso;
    const progresoBarra=()=>{
        if(pathname === "/")
        {
            progreso=2;
        } 
        else if(pathname ==="/resumen"){
            progreso=50;
        }
        else{
            progreso=100;
        }
        return progreso;
    }
  return (
    <aside className='flex items-center gap-5'>
    <Image className="ml-10" width={200} height={100} src={`/assets/img/logo.svg`}
     alt="Imagen Logotipo"/>
      
    
   <div className='flex flex-col w-full mt-5'>
    <nav className='flex justify-between font-bold text-3xl'>
    {pasos.map(element=>(
        <Link key={element.id} href={`${element.url}`} onClick={()=>changePaso(element.id)}>{element.nombre}</Link>
    ))}
    </nav>

    <div className='bg-gray-100 mb-10'>
        <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white' style={{width: `${progresoBarra()}%` }}></div>
    </div>
   </div>
   </aside>
  )
}

export default Pasos