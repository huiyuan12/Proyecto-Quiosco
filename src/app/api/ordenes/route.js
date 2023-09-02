import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(){
    
    const ordenes = await prisma.orden.findMany()

    return NextResponse.json(ordenes);
}

export async function POST(request){
    const data = await request.json();
  
    const orden = await prisma.orden.create({
     data:data
    })
    console.log(data)
     return NextResponse.json(orden)
 }