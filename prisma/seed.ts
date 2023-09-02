import { categorias} from "./data/categorias";
import { productos } from "./data/productos";

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const main=async()=>{
    try{
        await prismaClient.categoria.createMany({
            data:categorias
        })
       await prismaClient.producto.createMany({
            data:productos
        })
    }catch(error){console.log(error)}
}
main()