import { QuioscoProvider } from '../../context/QuioscoContext'
import Sidebar from './components/Sidebar'
import { Inter } from 'next/font/google'
import "../styles/globals.css"
import Pasos from './components/Pasos'
import Image from 'next/image'

export const metadata = {
  title: 'CaféFresh - Menú',
  description: 'Menú del quiosco',
}
 


export default function RootLayout({ children }) {
  return (
    <html lang="es"  id="next">
      <body id="next">
        <QuioscoProvider>
        <Pasos/>
        <div className='flex gap-5'>
        <Sidebar/> 
          
          {children}
         
        </div>
       
        </QuioscoProvider>
        </body>
        
    </html>
  )
}
