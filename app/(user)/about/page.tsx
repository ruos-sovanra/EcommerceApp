import { Metadata } from 'next'
import React from 'react'
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us",
    description: "this is about us page",
    openGraph:{
        type:"website",
        url:"https://ecommerce.sovanra.me/",
        title:"Create Next App",
        description:"this is about us page",
        images:"https://www.istad.co/resources/img/CSTAD_120.png",
    },
}

export default function AboutPage() {
    return (
        <main className='container mx-auto mt-20 px-4 sm:px-6 lg:px-8'>
            <section className='flex flex-wrap lg:flex-nowrap lg:justify-between border-1'>
                <div className='w-full lg:w-1/2'>
                    <Image src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-2305723,resizemode-75,msid-94767324/tech/technology/ecommerce-user-base-in-india-to-outpace-us-in-two-years-bain-report.jpg" alt="about" width={200} height={200} className="w-full" />
                </div>
                <div className='flex justify-center items-center w-full lg:w-1/2 md:ps-10'>
                    <div>
                        <p className='text-center text-lg sm:text-xl lg:text-2xl font-bold text-black'>Who We Are</p>
                        <p className='leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in eli</p>
                    </div>
                </div>
            </section>
            <section className='mt-10'>
                <h2 className='text-center text-lg sm:text-xl lg:text-2xl font-bold text-black'>Our Mission</h2>
                <p className='leading-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in eli</p>
            </section>
            <section className='mt-10'>
                <h2 className='text-center text-lg sm:text-xl lg:text-2xl font-bold text-black'>Our Team</h2>
                <div className='flex flex-wrap justify-center gap-4'>
                    <div className='w-60 h-60 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-4'>
                        <Image src="https://via.placeholder.com/150" alt="Team Member 1" width={50} height={50} className="rounded-full mb-2" />
                        <p className='text-center'>Team Member 1</p>
                    </div>
                    <div className='w-60 h-60 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-4'>
                        <Image src="https://via.placeholder.com/150" alt="Team Member 2" width={50} height={50} className="rounded-full mb-2" />
                        <p className='text-center'>Team Member 2</p>
                    </div>
                    <div className='w-60 h-60 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-4'>
                        <Image src="https://via.placeholder.com/150" alt="Team Member 3" width={50} height={50} className="rounded-full mb-2" />
                        <p className='text-center'>Team Member 3</p>
                    </div>
                </div>
            </section>
        </main>
    )
}