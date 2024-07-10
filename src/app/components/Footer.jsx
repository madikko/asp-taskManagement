import Link from 'next/link';
import React from 'react';
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterDetails from './FooterDetails';

export default function Footer() {
  return (
    <footer className='bg-purple-950 text-white min-h-[50vh] py-10 px-8'>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 py-8'>
            <section className='flex flex-col gap-y-4'>
                <h2>TasKing</h2>
                <p>Stay organised and manage your tasks at the tip of your fingers with TasKing</p>
                    <div className='text-3xl flex space-x-2 items-start'>
                        <Link href='#'>                        
                            <FaInstagram />
                        </Link>
                        <Link href='#'>                        
                            <FaLinkedinIn/>
                        </Link>
                        <Link href='#'>                        
                            <FaXTwitter/>
                        </Link>
                    </div>
            </section>
            <section className='flex flex-col gap-y-4'>
                <h2>About Us</h2>
                <ul className='flex flex-col gap-y-4'>
                    <FooterDetails title="About"/>
                    <FooterDetails title="Features"/>
                    <FooterDetails title="News & Articles"/>
                </ul>
            </section>
            <section className='flex flex-col gap-y-4'>
            <h2>Support Us</h2>
                <ul className='flex flex-col gap-y-4'>
                    <FooterDetails title="FAQs"/>
                    <FooterDetails title="Contact"/>
                    <FooterDetails title="Support Centre"/>                    
                    <FooterDetails title="Security"/>
                </ul>
            </section>
            <section className='flex flex-col gap-y-4'>
            <h2>Partner</h2>
                <ul className='flex flex-col gap-y-4'>
                    <FooterDetails title="Our Partners"/>
                    <FooterDetails title="Subscribe"/>
                </ul>
            </section>
        </div>
        <div>
            <p className="text-center py-10 border-t-2 border-t-purple-600">
                All rights reserved &copy; madikko {new Date().getFullYear()}
            </p>
        </div>
    </footer>
  )
}
