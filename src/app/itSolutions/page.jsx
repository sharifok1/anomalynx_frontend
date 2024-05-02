"use client"
import React from 'react';
import Nav from '../share/main_nav/Nav';
import video from "/public/asset/WebsiteDesign&Development.mp4"
import Image from 'next/image';
import serviceImg1 from "../../../public/asset/web_service.jpg"
import serviceImg2 from "../../../public/asset/graphics_service.jpg"
import serviceImg3 from "../../../public/asset/digital_marketing_service.jpg"
import serviceImg4 from "../../../public/asset/3drendaring_service.jpg"
import Link from 'next/link';
import Footer from '../share/footer/Footer';

const page = () => {
    return (
        <div className='bg-gray-200'>
            <Nav/>
             <section className='relative z-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-10 md:pt-20 '>
                {/* it service main page// */}
                <div className='flex justify-between flex-col md:flex-row'>
                   
                        <div className='md:w-1/2 heading_container '>
                            <h1 className='text-3xl lg:text-5xl font-bold md:text-4xl heading_under_style'> 
                                <span className='text-green-500'>IT </span> Services
                            </h1>
                            <p className='mt-20 md:mr-20 text-justify'>
                            Elevate your online presence with our comprehensive suite of services. From crafting responsive websites and visually striking graphics to optimizing for search engines and creating immersive 3D renderings, we bring your digital vision to life, ensuring your brand stands out in the competitive digital landscape.
                            </p>
                            <button 
                            className='bg-green-500 px-5 py-2 text-xl font-semibold rounded mt-10'
                            type='button'> Contact Now</button>
                        </div>

                    <div className='md:w-1/2 my-10 md:my-0'>
                    <video
                        className="h-100 w-100"
                        autoPlay
                        loop
                        muted  
                        src={video}
                        type="video/mp4"
                    />
                   
                    </div>
                </div>
             </section>

             <section className='relative'>
                {/* it services card/// */}
                <div  className='relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-10 md:pt-20 py-20 mt-20'>
                <div className='flex gap-6 justify-between relative flex-col md:flex-row'>
                    <div className='p-5 py-8 bg-white rounded-xl md:w-1/4 md:pb-20'>
                        <Image className='rounded-xl'
                        src={serviceImg1} alt='service_image' width="150" height="80"/>

                        <h3 className='text-xl font-semibold py-5'>
                            Website Design & Development
                        </h3>
                        <p className='text-justify'>
                        Revitalize your online presence with our web development expertise. From dynamic portfolios to updating old websites, we handle domain, hosting, and specialize in ecommerce solutions.
                        </p>
                        <Link href="/itSolutions/webDevelopment">
                        <button className='bg-green-500 rounded px-6 py-1 mt-5 absolute  bottom-8 left-5'>
                            Explore
                        </button>
                        </Link>
                    </div>

                    <div className='p-5 py-8 bg-white rounded-xl md:w-1/4 relative pb-20'>
                        <Image className='rounded-xl'
                        src={serviceImg2} alt='service_image' width="150" height="80"/>

                        <h3 className='text-xl font-semibold py-5'>
                          Graphics and Img Editing Services
                        </h3>
                        <p className='text-justify'>
                        We provide image editing services. Editing your product images can give you a competitive advantage. When consumers trust the images they see, there are more inclined to make a purchase.
                        </p>
                        <Link href="/itSolutions/graphicsService">
                        <button className='bg-green-500 rounded px-6 py-1 mt-5 absolute  bottom-8 left-5'>
                            Explore
                        </button>
                        </Link>
                    </div>

                    <div className='p-5 py-8 bg-white rounded-xl md:w-1/4 relative pb-20'>
                        <Image className='rounded-xl'
                        src={serviceImg3} alt='service_image' width="150" height="80"/>

                        <h3 className='text-xl font-semibold py-5'>
                            SEO & Digital Marketing
                        </h3>
                        <p className='text-justify'>
                        Boost online visibility and engagement with our tailored SEO and digital marketing strategies, driving targeted traffic and ensuring your brand stands out in the digital landscape.
                        </p>
                        <Link href="/itSolutions/digitalMarketing">
                            <button className='bg-green-500 rounded px-6 py-1 mt-5 absolute  bottom-8 left-5'>
                                Explore
                            </button>
                        </Link>
                    </div>

                    <div className='p-5 py-8 bg-white rounded-xl md:w-1/4 relative pb-20'>
                        <Image className='rounded-xl'
                        src={serviceImg4} alt='service_image' width="150" height="80"/>

                        <h3 className='text-xl font-semibold py-5'>
                            3D Design & Rendering 
                        </h3>
                        <p className='text-justify'>
                        Bring ideas to life with our 3D rendering. From architecture to products, we create captivating visuals that leave a lasting impact.
                        </p>

                        <Link href="/itSolutions/threeDservice">
                        <button className='bg-green-500 rounded px-6 py-1 mt-5 absolute  bottom-8 left-5'>
                            Explore
                        </button>
                        </Link>
                    </div>
                    
                    
                </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='bg-svg'>
                  <path fill="#000b76" fill-opacity="0.5" d="M0,256L30,240C60,224,120,192,180,160C240,128,300,96,360,90.7C420,85,480,107,540,133.3C600,160,660,192,720,176C780,160,840,96,900,106.7C960,117,1020,203,1080,240C1140,277,1200,267,1260,224C1320,181,1380,107,1410,69.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
                
             </section>
             <Footer/>
        </div>
    );
};

export default page;