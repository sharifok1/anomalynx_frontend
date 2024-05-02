"use client"
import React, { useState } from 'react';
import Nav from '../share/main_nav/Nav';
import Image from 'next/image';
import mapple_banner from '../../../public/asset/trading/maplesyrup.jpg'
import cashew_banner from '../../../public/asset/trading/cashew.jpg'
import shilajit_banner from '../../../public/asset/trading/shilajit.jpg'
import redpepper_banner from '../../../public/asset/trading/red_pepper.jpg'
import w180 from "../../../public/asset/trading/nut/w180.jpeg";
import w240 from "../../../public/asset/trading/nut/w240.jpeg";
import w320 from "../../../public/asset/trading/nut/w320.jpeg";
import w450 from "../../../public/asset/trading/nut/w450.jpeg";
import mapleSyrup from "../../../public/asset/trading/maple/W-00818-00-Maple.jpg";
import shilaJit from "../../../public/asset/trading/shilajit/2-1-scaled-shilajit.jpg";
import tradingIntro from "../../../public/asset/trading/trading.jpg"
import Link from 'next/link';
import Footer from '../share/footer/Footer';
import ContractFormTrading from '../share/contactPage/ContractFormTrading';

const Page = () => {


    const [openTab, setOpenTab] = useState(1);

    const productDetails = [
        {
            name: "Cashew Nuts",
            productCode: "w180",
            category: "nuts",
            importedCountry: "Tanjaniya",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.",
            minimumOrder: "1000 kg/pound",
            image: w180
        },
        {
            name: "Cashew Nuts",
            productCode: "w240",
            category: "nuts",
            importedCountry: "Tanjaniya",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.",
            minimumOrder: "1000 kg/pound",
            image: w240
        },
        {
            name: "Cashew Nuts",
            productCode: "w320",
            category: "nuts",
            importedCountry: "Tanjaniya",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.",
            minimumOrder: "1000 kg/pound",
            image: w320
        },
        {
            name: "Cashew Nuts",
            productCode: "450",
            category: "nuts",
            importedCountry: "Tanjaniya",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.",
            minimumOrder: "1000 kg/pound",
            image: w450
        },
        {
            name: "Maple Syrup",
            productCode: "W00818",
            category: "maple",
            importedCountry: "Canada",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.",
            minimumOrder: "5000 Pcs",
            image: mapleSyrup
        },
        {
            name: "Shilajit",
            productCode: "2-1-scaled",
            category: "shilaJit",
            importedCountry: "India",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.",
            minimumOrder: "1000 Pcs",
            image: shilaJit
        }
    ]

    const nuts = productDetails.filter((mapleSyrup) => { return mapleSyrup.category === "nuts" })

    const maple = productDetails.filter((mapleSyrup) => { return mapleSyrup.category === "maple" })

    const shila = productDetails.filter((mapleSyrup) => { return mapleSyrup.category === "shilaJit" })

    return (
        <div>
            <Nav />
            <section className='bg-gray-200 md:pb-20 pb-5'>
                {/* --------heading//---------- */}

                <div>

                    <div className=" duration-700 ease-in-out">
                        <Image src={mapple_banner} className="w-full" alt="header_banner_image" />
                    </div>


                </div>

                {/* =============heading=============== */}
                <div className='py-8 md:py-20 px-10 md:px-20 flex flex-col md:flex-row '>
                    <Image className='w-full md:w-1/3 h-auto rounded-xl shadow md:p-4' src={tradingIntro} alt='about' />
                    <div className='md:p-4'>
                        <h1 className='py-4 pt-10 text-2xl text-green-500 font-semibold mb-2'>Take one miniute please!!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem mollitia ad fugiat in velit eligendi quaerat laudantium modi provident quisquam maiores blanditiis rerum, nulla consequatur et, amet debitis nemo. Facilis, ab sint. Voluptatum pariatur, reprehenderit atque dicta sit eligendi culpa deserunt! Saepe commodi laudantium eveniet perspiciatis natus. Autem, aspernatur?
                        </p> <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem mollitia ad fugiat in velit eligendi quaerat laudantium modi provident quisquam maiores blanditiis rerum, nulla consequatur et, amet debitis nemo. Facilis, ab sint. Voluptatum pariatur, reprehenderit atque dicta sit eligendi culpa deserunt! Saepe commodi laudantium eveniet perspiciatis natus. Autem, aspernatur?
                        </p>

                        <Link href="#contact">
                            <button className='px-4 bg-green-500 py-3 mt-5 rounded text-lg font-semibold hover:bg-sky-950 hover:text-white'>
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>


                <div>
                    <h1 className='px-5 text-xl md:text-3xl text-green-500 font-bold mx-4 md:mx-20 mb-4'>
                        Currently we importing products:
                    </h1>
                </div>
                {/* -------product show tabs//--------------------- */}
                <div className="flex flex-wrap px-10 md:px-20">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-2 ">
                                <a
                                    className={
                                        "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-sky-950"
                                            : "text-black bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    {/* <i className="fas fa-space-shuttle text-base mr-1"></i>  */}
                                    Cashew Nuts
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-2">
                                <a
                                    className={
                                        "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-sky-950"
                                            : "text-black bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Maple Syrup
                                    {/* <i className="fas fa-cog text-base mr-1"></i>  */}
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-2">
                                <a
                                    className={
                                        "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-sky-950"
                                            : "text-black bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Shila Jit
                                    {/* <i className="fas fa-briefcase text-base mr-1"></i> */}
                                </a>
                            </li>

                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-2">
                                <a
                                    className={
                                        "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 4
                                            ? "text-white bg-sky-950"
                                            : "text-black bg-green-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    Red Pepper
                                    {/* <i className="fas fa-briefcase text-base mr-1"></i>  */}
                                </a>
                            </li>
                        </ul>



                        {/* tab details// */}
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg ">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                            {
                                                nuts?.map((product, index) => (
                                                    <div key={index}>
                                                        <Link href="#" className="flex flex-col items-center bg-gray-100 shadow-xl lg:flex-row hover:bg-gray-300 ">
                                                            <Image className="object-cover w-full lg:w-1/2 h-auto md:h-auto"
                                                                src={product.image} alt="productImage"
                                                            />
                                                            <div className="p-4 leading-normal bg-gray-100 hover:bg-gray-300">
                                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name + "-" + product.productCode}</h5>
                                                                <h6 className='text-lg text-gray-500 pb-2'>{product.importedCountry}</h6>
                                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                                    {product.description}
                                                                </p>
                                                                <p className='text-sky-950 text-xl'>Minimum order - {product.minimumOrder}</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                            {
                                                maple?.map((product, index) => (
                                                    <div key={index}>
                                                        <Link href="#" className="flex flex-col items-center bg-gray-100 shadow-xl lg:flex-row hover:bg-gray-300 ">
                                                            <Image className="object-cover w-full lg:w-1/2 h-auto md:h-auto"
                                                                src={product.image} alt="productImage"
                                                            />
                                                            <div className="p-4 leading-normal bg-gray-100 hover:bg-gray-300">
                                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name + "-" + product.productCode}</h5>
                                                                <h6 className='text-lg text-gray-500 pb-2'>{product.importedCountry}</h6>
                                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                                    {product.description}
                                                                </p>
                                                                <p className='text-sky-950 text-xl'>Minimum order - {product.minimumOrder}</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                            {
                                                shila?.map((product, index) => (
                                                    <div key={index}>
                                                        <Link href="#" className="flex flex-col items-center bg-gray-100 shadow-xl lg:flex-row hover:bg-gray-300 ">
                                                            <Image className="object-cover w-full lg:w-1/2 h-auto md:h-auto"
                                                                src={product.image} alt="productImage"
                                                            />
                                                            <div className="p-4 leading-normal bg-gray-100 hover:bg-gray-300">
                                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name + "-" + product.productCode}</h5>
                                                                <h6 className='text-lg text-gray-500 pb-2'>{product.importedCountry}</h6>
                                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                                    {product.description}
                                                                </p>
                                                                <p className='text-sky-950 text-xl'>Minimum order - {product.minimumOrder}</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                            {
                                                <h1 className='text-2xl'>Products comming soon</h1>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact form */}
            <div id='contact'>
                <ContractFormTrading />
            </div>


            <Footer />
        </div>
    );
};

export default Page;