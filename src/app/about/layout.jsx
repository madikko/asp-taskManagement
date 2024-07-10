import React from 'react'
export const metadata = 
{
    title: "About | Task Management App",
    description: "About page for managing tasks",
    keywords: "task,management"
  };
  //can use props instead
export default function AboutLayout({children}) 
{
  return (
    //then {props.children}
    <div>{children}</div>
  )
}
