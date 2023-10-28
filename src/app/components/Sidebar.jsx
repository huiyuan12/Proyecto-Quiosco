"use client"
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import QuioscoContext, { useQuiosco } from '../../../context/QuioscoContext'
import Categoria from './Categoria'
import Pasos from './Pasos'

const Sidebar = () => {
    const {categorias,admin,setAdmin} = useContext(QuioscoContext);

  return (
   <>
 
     <div className='w-6/12 md:w-4/12 2xl:w-1/4 text-sm'>
    
     <div className='mt-20'>
         {categorias.map(element=>(
             <Categoria key={element.id} categoria={element}/>
         ))}
     </div>
 </div>
 
   </>
  )
}

export default Sidebar