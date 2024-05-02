import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bnrImage from '../../../public/asset/banerimage.png';
import aboutUs from '../../../public/asset/aboutUs.jpg';
import ContractFormTrading from '../share/contactPage/ContractFormTrading';

const HomePage = () => {
    return (
        <>
            <video
                className="ho_pa_bg_video"
                autoPlay
                loop
                muted
                poster="/asset/bgVideoPoster.png">
                <source
                    src="/asset/home_beg.mp4"
                    type="video/mp4"
                />
            </video>
            <div className=" relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10 md:py-20">
                <header>
                    <div className='w-100 flex items-center justify-between'>
                        <div>
                            <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold text-green-500	'>
                                Let’s grow <br />
                                your business.
                            </h1>
                            <p className='md:text-4xl font-semibold text-white mt-10'>We are here to assist you.</p>
                            <p className='md:text-xl font-semibold text-white mt-2'>IT Consultants <span className='text-green-500'>||</span> International Trading <span className='text-green-500'>||</span> Garments/Textile</p>
                        </div>
                        <div className='flex justify-end'>
                            <Image className='hidden md:block md:h-2/3 md:w-2/3 lg:'
                                src={bnrImage} alt='banner-image' />

                        </div>
                    </div>
                </header>
                <section className="flex md:justify-between md:mt-10 flex-col md:flex-row gap-4 mt-20 ">
                    <div className='md:w-1/3 p-10 bg-green-600 rounded-lg'>
                        <p className='md:text-2xl lg:text-3xl font-bold text-white mb-4'>
                            IT Consultants
                        </p>
                        <Link href="/itSolutions">
                            <span className='text-white font-normal text-2xl border-2 px-8 rounded-3xl pb-2  hover:bg-sky-950'>
                                &rarr;
                            </span>
                        </Link>
                    </div>

                    <div className='md:w-1/3 p-10 bg-green-600 rounded-lg my:2'>
                        <p className='md:text-2xl lg:text-3xl font-bold text-white mb-4'>
                            International Trading
                        </p>
                        <Link href="/trading">
                            <span className='text-white font-normal text-2xl border-2 px-8 rounded-3xl pb-2  hover:bg-sky-950'>
                                &rarr;
                            </span>
                        </Link>
                    </div>

                    <div className='md:w-1/3 p-10 bg-green-600 rounded-lg'>
                        <p className='md:text-2xl lg:text-3xl font-bold text-white mb-4'>
                            Garments/ Textile
                        </p>
                        <Link href="/garments">
                            <span className='text-white font-normal text-2xl border-2 px-8 rounded-3xl pb-2  hover:bg-sky-950'>
                                &rarr;
                            </span>
                        </Link>
                    </div>


                </section>
            </div>
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
                    src={aboutUs} alt='image of team' />
            </div>
            <ContractFormTrading />

        </>
    );
};

export default HomePage;
