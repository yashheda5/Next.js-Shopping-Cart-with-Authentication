import React from 'react'
import CartPage from '@/components/CartPage'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function Cart() {
  const getSession=await auth();
  if(!getSession?.user) redirect("/unauth-page")
  return (
   <CartPage/>
  )
}
