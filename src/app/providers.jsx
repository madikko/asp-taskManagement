"use client";
import React, { createContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({children}) => 
{
    //created hook
    const [open,setOpen] = useState(false);
  return (
    <div>
        <SidebarContext.Provider value={{open, setOpen}}>
            {children}
        </SidebarContext.Provider>
    </div>
  )
}

export {SidebarProvider,SidebarContext}