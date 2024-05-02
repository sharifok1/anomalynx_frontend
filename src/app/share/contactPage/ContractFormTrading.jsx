import React from 'react';

const ContractFormTrading = () => {
    return (

        // CONTACT FORM FOR INTERNATIONAL TRADING//
        <div className='bg-gray-300'>
            <div>
                <h1 className='text-3xl lg:text-5xl font-bold md:text-4xl text-center text-green-500 pt-20 '>
                    Please Submit your Interest!
                </h1>
                <p className='px-4 mt-2 md:mt-4 text-black text-center'>
                    We are available for meet. <br /> Fill out this form to tell us about your interest and get a personalized quote.
                </p>
            </div>
            <div className="max-w-screen-lg mx-auto p-5">
                <div>

                    <form className="md:col-span-8 md:p-10">
                        {/* ============================Name & phone number========// */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-1"
                                    for="full_name">
                                    Your Full Name <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="full_name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-1"
                                    for="contact_number">
                                    Contact Number <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="contact_number"
                                    type="number"
                                    required
                                    placeholder="+1 234 56789" />
                            </div>
                        </div>
                        {/* ============================Emaill and Address==========// */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-1"
                                    for="email">
                                    Email <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="email"
                                    type="mail"
                                    placeholder="support@anomalynx.com"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-1"
                                    for="address">
                                    Mailing Address <span className='text-gray-400'> (optional)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="address"
                                    type="text"
                                    placeholder="Road-9b, Sector-5, Dhaka, Bangladesh" />
                            </div>
                        </div>
                        {/* ============================Company and Position/Role======== */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-1"
                                    for="company">
                                    Company Name <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="company"
                                    type="text"
                                    required
                                    placeholder="Anomalynx"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-1"
                                    for="role">
                                    Your Role
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="role"
                                    type="text"
                                    placeholder="Business Owner" />
                            </div>
                        </div>

                        {/* =============Client message ==========// */}
                        <div className="flex flex-wrap -mx-3 mb-6 mt-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide black text-xs font-bold mb-2"
                                    for="message">
                                    Tell us a bit about your interest and if have any questions to us...
                                </label>
                                <textarea
                                    rows="10"
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder='Write your message ...'
                                />
                            </div>
                            <div className="flex justify-between w-full px-3">
                                <button
                                    className="shadow bg-green-500 hover:bg-sky-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                    type="submit">
                                    Send Message
                                </button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContractFormTrading;