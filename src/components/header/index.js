"use client";
import { Button } from '../ui/button';
import React from 'react'
import Link from 'next/link';
import { LoginAction, LogOutAction } from '@/actions';

export default function Header({getSession}) {
  return (
    <header className='flex items-center shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
        <Link href={"/"}>Shopping Cart</Link>
      </div>
      <ul className='flex gap-6 item-center justify-center mr-10'>
        <li className='text-lg font-semibold'><Link href={"/"}>Product</Link></li>
        <li className='text-lg font-semibold'><Link href={"/Cart"}>Cart</Link></li>
      </ul>
      <div className='flex space-x-3'>
        <form action={getSession?.user ? LogOutAction : LoginAction}>
          <Button type="submit">
            {getSession?.user ? "Logout" : "Login"}
          </Button>
        </form>
      </div>
    </header>
  )
}