"use client"
import useLocalStorage from '@/hooks/useLocalStorage';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from "react-toastify"
const QuioscoContext = createContext();
const QuioscoProvider = ({children}) => {
    const [pedido,setPedido] = useLocalStorage("tareas",[])
    const router = useRouter();
    const [categorias,setCategorias] = useState([]);
    const [categoriaActual,setCategoriaActual] = useState({});
    const [producto,setProducto] = useState({});
    const [modal,setModal] = useState(false);
   
    const [paso,setPaso] = useState(1);
    const [nombre,setNombre] = useState("");
    const [total,setTotal] = useState(0);
    const [admin,setAdmin] = useState(false);
    const [orden, setOrden] = useState([]);
 
    useEffect(()=>{
        if(pedido.length > 0){
        const totalPagar = pedido.reduce((total,element)=>total+element.precio*element.cantidad,0);
        setTotal(totalPagar);
        }
        localStorage.setItem("pedido",JSON.stringify(pedido));
    },[pedido])
    const enviarPedido = async e=>{
        e.preventDefault();
        try{
            const {data} = await axios.post("/api/ordenes",{pedido,nombre, total,fecha:Date.now().toString()})
         
            setCategoriaActual(categorias[0]);
            setProducto({})
            setPedido(0);
            setNombre("");
            setTotal(0);
            toast.success("Pedido añadido");
            setTimeout(() => {
                router.push("/");
            }, 2000);
        }catch(error){console.log(error)}
    }
    const changePaso = paso =>{
        setPaso(paso);
    }
    const handleChangePedido = id  =>{
        changeModal();
        const productEditar = pedido.find(element=>element.id===id);
        setProducto(productEditar);
        console.log(productEditar)
    }
    const eliminarProducto = id=>{
        const pedidoAct = pedido.filter(element=>element.id!==id)
        setPedido(pedidoAct);
    }
    const añadirPedido = (productoAñadir)=>{

        if(pedido.some(element=>element.id==productoAñadir.id))
        {
            const pedidoActualizado = pedido.map(element=>
             {
                if(element.id==productoAñadir.id)
                {
                    element.cantidad = productoAñadir.cantidad
                  
                }  return element; 
            }
            
            )
            setPedido(pedidoActualizado);
            toast.success("Cambios guardados")
        }
        else{
            setPedido([...pedido,productoAñadir])
            toast.success("Producto añadido")
        }
    }
    const changeModal=()=>{
        setModal(!modal);
    }
    const handleClickProducto = producto=>{
        setProducto(producto);
    }
    const handleChangeCategoria = categoria=>{
        setCategoriaActual(categoria);
    }
    useEffect(()=>{
        const obtenerCategorias = async()=>{
            try{
                const {data} = await axios("/api/categorias")
               setCategorias(data);
               setCategoriaActual(data[0]);
            }catch(error){console.log(error)}
        }
        obtenerCategorias();
    },[])
  return (
    <QuioscoContext.Provider value={{
        categorias,handleChangeCategoria,categoriaActual,handleClickProducto,producto,changeModal,modal,añadirPedido,pedido,
        changePaso,paso, handleChangePedido, eliminarProducto,nombre,setNombre,enviarPedido,total,admin,setAdmin,setTotal
    }}>
        {children}
    </QuioscoContext.Provider>
  )
}
export {QuioscoProvider}
export default QuioscoContext

export const useQuiosco=()=>{
    return useContext(QuioscoContext);
}