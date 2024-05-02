import Nav from '@/app/share/main_nav/Nav';
import React from 'react';

const page = () => {
    return (
        <>
           <Nav/> 
           <div className='bg-blue-300'>
            <div className='relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-10 md:pt-20 py-20 mt-20'>
                <h1 className='text-4xl mt-20 text-center'>
                    Service will be available here soon! <br />
                    Please contact from our contact page for <span className='text-lime-300 font-bold'>your image edting service</span>
                </h1>
            </div>
            </div>
        </>
    );
};

export default page;