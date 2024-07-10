import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Main() 
{
  return (
    <main className='grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-y-10 items-start mx-4'>
            <h1 className='capitalize text-5xl font-semibold my-4 px-2'>Manage your tasks quickly</h1>
            <p>Stay organised and manage your tasks at the tip of your fingers with TasKing</p>
            <button className='bg-purple-600 py-2 px-6 my-2 rounded-md shadow-lg 
                                text-center text-white hover:bg-purple-900'>
                <Link href={'/getStarted'}>Get Started</Link>
            </button>
        </div>
        <div className='my-4'>
            <Image src='/sticky-task.jpg' alt="manage your tasks" width='500' height='500'
             className='rounded-md'></Image>
        </div>
    </main>
  )
}
