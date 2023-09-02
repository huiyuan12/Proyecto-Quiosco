"use client"
import React, { useEffect } from 'react'
import { useQuiosco } from '../../../context/QuioscoContext'
import ResumenProducto from '../components/ResumenProducto';
import Modal from "react-modal"
import ModalProducto from '../components/ModalProducto';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  
const ResumenPage = () => {
    const {pedido,modal,setAdmin} = useQuiosco();
    useEffect(()=>{
      setAdmin(false);
    },[])
  return (
   <div className=' flex flex-col '>
    <h1 className='text-4xl font-black '>
        Resumen de tu pedido
     </h1>
     <p className='text-2xl my-4'>Elige y personaliza tu pedido</p>

     {pedido.length === 0 ? <p> No hay elementos en tu pedido </p>:
     (
        pedido.map(element=>
        <ResumenProducto key={element.id} producto={element} />)
     )
     }
      {modal && <Modal isOpen={modal} style={customStyles}><ModalProducto/> </Modal>}

   </div>
  )
}

export default ResumenPage