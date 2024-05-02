import React from 'react';
import Nav from '../share/main_nav/Nav';
import Footer from '../share/footer/Footer';
import Image from 'next/image';
import aboutImg from '../../../public/asset/aboutUs.jpg'
import { RxAvatar } from "react-icons/rx";


const page = () => {
    return (
        <div>
            <Nav />
            <div>
                <div className='flex flex-col md:flex-row justify-between lg:px-20 px-5 py-20 bg-gray-200'>
                    <div className='md:w-1/2 pb-5 md:pb-0'>
                        <h2 className='text-green-500 text-xl font-semibold pb-4'>About Us</h2>
                        <h3 className='text-2xl'>“From Vision to Reality, We are Your Partner in Success - Anomalynx.”</h3>
                        <p className='text-justify pt-10'>
                            Anomalynx is more than just a company; it{`'`}s a team of passionate individuals dedicated to nurturing dreams and facilitating growth. With a unique combination of innovation and expertise, we provide a wide range of customized services to address your business requirements. Whether it{`'`}s advanced IT solutions, international trade support, textile innovation, or educational empowerment, we{`'`}re committed to guiding you through every stage. Our mission is clear: to partner with you in achieving success by simplifying the complexities of modern business and unlocking your maximum potential.
                        </p>
                    </div>

                    <Image
                        className='md:w-2/5'
                        src={aboutImg} alt='image of team' />
                </div>
            </div>
            <div className='bg-gray-300 px-5 md:px-20 py-10 md:py-20 relative'>
                <h2 className='text-center text-4xl font-bold text-green-500 mb-2'>Meet The Team</h2>
                <p className='text-center mt-2 mb-5'>Our Anomalynx team is made up of people from all around the world. <br /> We come from different places but are connected through Anomalynx, allowing us to provide our services worldwide</p>

                <div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-10 md:py-20'>
                        <div>
                            <div className='mx-2'>
                                <div className='relative'>
                                    <div className='absolute w-full h-full bg-green-500 start-2 top-2 rounded shadow'></div>
                                    <p className='flex justify-center text-9xl text-white relative bg-sky-950 rounded shadow-xl py-10'>
                                        <RxAvatar />
                                    </p>
                                </div>
                                <h4 className='text-2xl font-semibold mt-4'>Rafat Rahman</h4>
                                <h5 className='text-lg font-semibold'>CEO & Founder-Anomalynx</h5>
                                <p>Nationality: Canda || Bangladesh</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className='mx-2'>
                                <div className='relative'>
                                    <div className='absolute w-full h-full bg-green-500 start-2 top-2 rounded shadow'></div>
                                    <p className='flex justify-center text-9xl text-white relative bg-sky-950 rounded shadow-xl py-10'>
                                        <RxAvatar />
                                    </p>
                                </div>
                                <h4 className='text-2xl font-semibold mt-4'>Md Shariful Islam</h4>
                                <h5 className='text-lg font-semibold'>Computer Engineer</h5>
                                <p>Nationality: Bangladesh</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className='mx-2'>
                                <div className='relative'>
                                    <div className='absolute w-full h-full bg-green-500 start-2 top-2 rounded shadow'></div>
                                    <p className='flex justify-center text-9xl text-white relative bg-sky-950 rounded shadow-xl py-10'>
                                        <RxAvatar />
                                    </p>
                                </div>
                                <h4 className='text-2xl font-semibold mt-4'>Mr. XYZ</h4>
                                <h5 className='text-lg font-semibold'>Communication Manager</h5>
                                <p>Nationality: South Africa</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className='mx-2'>
                                <div className='relative'>
                                    <div className='absolute w-full h-full bg-green-500 start-2 top-2 rounded shadow'></div>
                                    <p className='flex justify-center text-9xl text-white relative bg-sky-950 rounded shadow-xl py-10'>
                                        <RxAvatar />
                                    </p>
                                </div>
                                <h4 className='text-2xl font-semibold mt-4'>Mr. ABC</h4>
                                <h5 className='text-lg font-semibold'>Project Manager</h5>
                                <p>Nationality: Canda</p>
                            </div>
                        </div>
                        


                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default page;