"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaHamburger,FaCheckSquare  } from "react-icons/fa";
import { SidebarContext } from '../providers';


export default function Navbar() 
{
    const{open,setOpen} = useContext(SidebarContext);
    function handleClose(){
        setOpen(!open)
    }
  return (
    <nav className='bg-purple-950 flex flex-col items-center justify-between md:h-[80px] text-white'>
        <ul>
        <li className='md:hidden block cursor-pointer py-6' onClick={handleClose}>
                <FaHamburger/>
            </li>
        </ul>
        <ul className={`flex md:flex-row ${open?'flex-col h-screen':'h-[80vh] md:flex hidden items-center'} 
        justify-evenly space-x-4 items-center font-semibold`}>
            
            <li className='font-extrabold text-purple-400 text-xl hover:text-purple-800'>
              <Link href='/' className='flex items-center mx-1'><span>TasKing </span> <FaCheckSquare /></Link>      
            </li>
            <li className='hover:text-purple-400'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-purple-400'>
              <Link href='/about'>About</Link>
            </li>
            <li className='hover:text-purple-400'>
              <Link href='/contact'>Contact</Link>
            </li>      
            <li className='bg-purple-600 hover:bg-purple-900 py-2 px-4 rounded-md shadow-lg text-center text-white'>
              <Link href='/getStarted'>Get Started</Link>
            </li>       
        </ul>
    </nav>
  )
}
