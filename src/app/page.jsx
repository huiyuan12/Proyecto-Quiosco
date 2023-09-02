"use client"
import Image from 'next/image'
import { useQuiosco } from '../../context/QuioscoContext'
import Producto from './components/Producto';
import Modal from "react-modal"
import ModalProducto from './components/ModalProducto';
import "react-toastify/dist/ReactToastify.css"
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
import {ToastContainer} from "react-toastify"
import { useEffect } from 'react';
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#next");
export default function Home() {
  const {categoriaActual,modal,setAdmin} =useQuiosco();
  useEffect(()=>{
    setAdmin(false);
  },[])

  return (
   
    <div className=' h-screen overflow-y-scroll'>
     <h1 className='md:text-4xl font-black text-center md:text-left'>
        {categoriaActual.nombre}
     </h1>
     <p className='md:text-2xl my-4'>Elige y personaliza tu pedido</p>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
    {
      categoriaActual?.productos?.map(element=>(
      <Producto key={element.id} producto={element}/>
      )
      )
     }
    </div>

    {modal && <Modal isOpen={modal} style={customStyles}><ModalProducto/> </Modal>}
    <ToastContainer/>
    </div>
    
  )
}
