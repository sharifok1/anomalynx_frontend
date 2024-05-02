import Image from 'next/image';
import React from 'react';
import siteLogo from '/public/asset/anomlyNav.png'
import Link from 'next/link';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-sky-950 mb-0 pb-2 mb-0 px-5 md:px-20 pt-10 md:pt-20 pb-2'>

            <div className='flex flex-col lg:flex-row justify-between text-gray-300 pb-5 md:pb-10'>

                <div className='w-100 lg:w-2/5 pb-10 lg:pb-0'>
                    <div className='flex items-center lg:items-start'>
                        <Image
                            className='w-28 h-auto'
                            src={siteLogo} alt='site logo' />
                        <h4 className='text-xl text-white font-semibold pl-4'>
                            From Vision to Reality, We are Your Partner in Success - Anomalynx.
                        </h4>
                    </div>
                    <p className='text-gray-300 justify'>
                        Anomalynx isnʼt just a company; itʼs a passionate team dedicated to nurturing dreams and fostering growth. we offer customized services spanning IT solutions, global trade, textile innovation, and education.
                    </p>
                </div>

                <div className='flex justify-between lg:justify-around lg:w-2/3 flex-col md:flex-row'>
                    <div>
                        <h4 className='text-white text-lg mb-2'>Quick Link</h4>
                        <Link href="/"
                            className='hover:text-green-500'>
                            Home Page</Link> <br />
                        <Link href="/itSolutions/webDevelopment"
                            className='hover:text-green-500'>
                            Web Development</Link> <br />
                        <Link href="/trading"
                            className='hover:text-green-500'>
                            International Products</Link><br />
                        <Link href="/garments"
                            className='hover:text-green-500'>
                            Garments/Textile</Link><br />
                        <Link href="/"
                            className='hover:text-green-500'>
                            Career Development</Link><br />
                        <Link href="/contactUs"
                            className='hover:text-green-500'>
                            Submit A proposal</Link><br />
                    </div>
                    <div className='pt-4 md:pt-0'>
                        <h4 className='text-white text-lg mb-2'>Contact Us</h4>
                        <p className='flex items-center text-gray-300'> <MdOutlineEmail /> &nbsp; support@anomalynx.com</p>
                        <p className='flex items-center text-gray-300'> <FaPhoneSquareAlt /> &nbsp; BD: +880 1234xxxxx</p>
                        <p className='flex items-center text-gray-300'> <FaPhoneSquareAlt /> &nbsp; CA: +1 12xxxxxxxx</p>

                    </div>
                </div>
            </div>
            <hr /> <br />

            <div className='flex flex-col md:flex-row justify-around'>
                <div>
                    <h3 className='text-2xl text-white font-semibold mb-2'> Follow Us:</h3>
                    <div className='flex gap-4 text-white'>
                        <Link href="#" target='_blank'
                            className='text-5xl'
                        ><FaFacebookSquare /></Link>
                        <Link href="#" target='_blank'
                            className='text-5xl'
                        ><FaLinkedin /></Link>
                        <Link href="#" target='_blank'
                            className='text-5xl'
                        ><FaSquareXTwitter /></Link>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-2xl text-white font-semibold mb-2'>We accept:</h3>
                    <div className='flex gap-3 text-6xl text-white'>
                        <FaCcPaypal />
                        <FaCcMastercard />
                        <FaCcVisa />
                    </div>
                </div>
            </div> <br />
            <hr /> <br />

            <div>
                <p className='text-gray-400 pb-2'>&copy; 2024 anomlynx.com</p>
            </div>

        </div>
    );
};

export default Footer;

