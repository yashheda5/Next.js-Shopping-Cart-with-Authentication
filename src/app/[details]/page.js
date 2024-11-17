import { fetchProductDetails } from '@/actions'
import AddToCart from '@/components/add-to-Cart';
import React from 'react'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function ProductDetails({ params }) {
    // const getSession=await auth();
    // if(!getSession?.user) redirect("/unauth-page")
    const getProductDetails = await fetchProductDetails(params.details);
    console.log(getProductDetails, 'Product Details');
    return (
        <div className='max-w-6xl mx-auto p-2 '>
            <div className="p-6">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <img src={getProductDetails?.thumbnail} alt={getProductDetails?.title} className='w-4/5 rounded object-cover' />
                        <hr className='border-black border-2 my-6' />
                        <div className='flex flex-wrap gap-5 justify-center mx-auto'>
    {
        getProductDetails?.images?.length > 0 
        ? getProductDetails.images.map(imageItem => (
            <img src={imageItem} alt={imageItem} className='w-24 cursor-pointer' key={imageItem} />
          ))
        : <p>No images available</p>
    }
</div>

                    </div>
                    <div className='lg:col-span-2'>
                    <h2 className='text-3xl font-bold text-gray-900'>{getProductDetails?.title}</h2>
                    <p className='mt-5 text-gray-900 text-xl'>{getProductDetails?.price}</p>
                    <h3 className='text-lg font-bold text-gray-700'>{getProductDetails?.description}</h3>
                    <AddToCart productItem={getProductDetails} />
                    </div>
                </div>
            </div>
        </div>
    )
}
