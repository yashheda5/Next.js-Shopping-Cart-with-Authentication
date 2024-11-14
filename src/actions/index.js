'use server'

import { signOut,signIn } from "@/auth";

export async function  fetchAllProducts(){
    try{
        const result = await fetch('https://dummyjson.com/products',{
            method: 'GET',
            cache:'no-store'
        });
        const data=await result.json();
        return{
            success: true,
            data:data?.products,
        }
    }catch(e){
        console.log(e);
        return{
            success:false,
            message: " Some error occurred please try again"
        }
    }
}

export async function fetchProductDetails(CurrentProductId){
    try {
        const result=await fetch(`https://dummyjson.com/products/${CurrentProductId}`,{
            method:'GET',
            cache:"no-store"
        })
        const data=await result.json();
        return data;
    } catch(e){
        console.log(e);
        return{
            success:false,
            message: " Some error occurred please try again"
        }
    }
}
export async function LoginAction(){
    await signIn('github')
}
export async function LogOutAction(){
    await signOut('github')
}