import Nav from '@/app/share/main_nav/Nav';
import Image from 'next/image';
import React from 'react';
import headingImg from "../../../../public/asset/responsive_photo.png"
import ContactFormWeb from '@/app/share/contactPage/ContactFormWeb';

const page = () => {
    return (
        <>
            <Nav/>
            <div className='bg-gray-200'>
            <div className='relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-10 md:pt-20 py-20'>
               
                {/* heading/// */}
                <section>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                   
                   <div className='md:w-1/2 '>
                       <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold'> 
                           Website<br /><span className='text-green-500'>  Design &</span> Development
                       </h1>
                   </div>

                    <div className='md:w-1/2 my-10 md:my-0'>
                        <Image src={headingImg} alt='web-banner-img'/>
                    </div>
                 </div>
                 <button 
                       className='bg-green-500 px-5 py-2 text-xl font-semibold rounded '
                       type='button'>Our Success Project
                </button>
                </section>

                {/* -----------how its work--------------// */}

                <section>
                    <div className='relative md:mt-28 mt-10'>
                    <h1 className='text-3xl lg:text-5xl font-bold md:text-4xl heading_under_style'> 
                        How its work
                    </h1>
                    </div>

                    <div class="flex h-auto items-center justify-center md:justify-start px-6 my-20">
                    <div class="space-y-6 border-l-2 border-dashed">
                       
                        <div class="relative w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-6">
                            <h4 class="font-bold text-gray-500 text-xl"><span className='text-green-500'>Step 1:</span> Client Requirment & Clarification.</h4>
                            <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sapiente explicabo? Cumque, quasi. Consequatur repellat necessitatibus non ratione quidem possimus, dignissimos provident unde, minus incidunt animi iusto fugiat dolorum eveniet.
                            </p>
                        </div>

                        </div>
                        <div class="relative w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-6">
                            <h4 class="font-bold text-gray-500 text-xl"><span className='text-green-500'>Step 2:</span>Analysis & Production</h4>
                            <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sapiente explicabo? Cumque, quasi. Consequatur repellat necessitatibus non ratione quidem possimus, dignissimos provident unde, minus incidunt animi iusto fugiat dolorum eveniet.
                            </p>
                        </div>

                        </div>
                        <div class="relative w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-6">
                            <h4 class="font-bold text-gray-500 text-xl"><span className='text-green-500'>Step 3:</span> Development and Build .</h4>
                            <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sapiente explicabo? Cumque, quasi. Consequatur repellat necessitatibus non ratione quidem possimus, dignissimos provident unde, minus incidunt animi iusto fugiat dolorum eveniet.
                            </p>
                        </div>
                        </div>

                        <div class="relative w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-6">
                            <h4 class="font-bold text-gray-500 text-xl"><span className='text-green-500'>Step 4:</span> Quality Assurance.</h4>
                            <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sapiente explicabo? Cumque, quasi. Consequatur repellat necessitatibus non ratione quidem possimus, dignissimos provident unde, minus incidunt animi iusto fugiat dolorum eveniet.
                            </p>
                        </div>
                        </div>

                        <div class="relative w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-6">
                            <h4 class="font-bold text-gray-500 text-xl"><span className='text-green-500'>Step 5:</span> Payment & Delivery.</h4>
                            <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sapiente explicabo? Cumque, quasi. Consequatur repellat necessitatibus non ratione quidem possimus, dignissimos provident unde, minus incidunt animi iusto fugiat dolorum eveniet.
                            </p>
                        </div>
                        </div>

                        
                    </div>
                    </div>

                </section>
            </div>
            </div>

             {/* ===============contact form// ======================================*/}
           <div className='bg-sky-950'>
            <ContactFormWeb/>
           </div>
            
        </>
    );
};

export default page;