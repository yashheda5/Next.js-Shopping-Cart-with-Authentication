'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button';
import { removeFromCart } from '@/store/slices/cart-slice';
export default function CartPage() {
    const { cart } = useSelector((state) => state);
    console.log(cart?.cartItems);
    const [totalAmount, settotalAmount]=useState(0);
    useEffect(()=>{
        settotalAmount(cart?.cartItems.reduce((acc,curr)=>acc+curr?.price,0))
    },[cart?.cartItems])
    if(!cart?.cartItems.length) return <h1 className='text-4xl font-bold p-10'>Cart is empty</h1>
    const dispatch=useDispatch();
    function  handleRemoveFromCart(CurrentItemId) {
        console.log(CurrentItemId)
        dispatch(removeFromCart(CurrentItemId))
    }
    return (
        <div className='bg-white py-4'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl font-extrabold text-[#333]'>Cart</h2>
                <div className='overflow-y-auto'>
                    <table className='mt-12 w-full border-collapse divide-y'>
                        <thead className='whitespace-nowrap text-left'>
                        <tr>
                            <th className='text-base text-gray-700 p-4'>Title</th>
                            <th>Price </th>
                            <th>Remove </th>
                        </tr>
                        </thead>
                        <tbody className='whitespace-nowrap divide-y'>
                        {
                            cart?.cartItems.map(item => 
                            <tr>
                                <td className='py-5 px-4'>
                                    <div className='flex items-center gap-6 w-max'>
                                    <div className="h-36 shrink-0">
                                        <img src={item?.thumbnail} alt={item?.title} className='w-full h-full object-contain' />
                                    </div>
                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{item?.price}</p>
                                </td>
                                <td className='py-4 px-4'>
                                    
                                    <Button onClick={() => handleRemoveFromCart(item?.id)}>Remove</Button>

                                </td>
                            </tr>
                            )

                        }
                        </tbody>
                    </table>
                </div>
                <div className='max-w-xl ml-auto mt-6'>
                <p className='text-lg font-bold'>Total <span>{totalAmount}</span> </p>
                </div>
            </div>
        </div>
    )
}
