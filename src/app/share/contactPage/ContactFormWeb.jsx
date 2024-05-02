import React from 'react';

const ContactFormWeb = () => {
    return (
        <>
            <div>
                <h1 className='text-3xl lg:text-5xl font-bold md:text-4xl text-center text-green-500 pt-20 '>
                    Submit Your Project Details
                </h1>
                <p className='px-4 mt-2 md:mt-4 text-white text-center'>
                    We are available for custom development projects. <br /> Fill out this form to tell us about your project and get a personalized quote.
                </p>
            </div>
            <div className="max-w-screen-lg mx-auto p-5">
                <div>

                    <form className="md:p-10">
                        {/* ============================Name & phone number========// */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
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
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
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
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
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
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
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
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
                                    for="company">
                                    Company Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="company"
                                    type="text"
                                    placeholder="Anomalynx"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
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

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3">
                                <label for="service_package" className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1">
                                    Service Package<span className='text-red-500'>*</span>
                                </label>
                                <select
                                    id="service_package"
                                    required={true}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                >
                                    <option disabled selected value="">--Select Package--</option>
                                    <option>Full Stack with design</option>
                                    <option>Frontend Development</option>
                                    <option>WordPress/Theme customization</option>
                                    <option>Website Redesign</option>
                                    <option>Website Maintenance</option>
                                    <option>HTML CSS Conversion</option>
                                    <option>CMS setuo</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label for="service_package" className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1">
                                    Technology<span className='text-red-500'>*</span>
                                </label>
                                <select
                                    id="service_package"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    required={true}>
                                    <option disabled selected value="">--Choose Technology--</option>
                                    <option>React/NextJs</option>
                                    <option>HTML, CSS, Bootstrap</option>
                                    <option>WordPress</option>
                                    <option>Shopify</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3 mb-2">
                                <label for="budget" className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1">
                                    Estimate Budget <span className='text-red-500'>*</span>
                                </label>
                                <select
                                    id="budget"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    required={true}>
                                    <option disabled selected value="">--Select Budget--</option>
                                    <option>Less than $500</option>
                                    <option>$500 - $1000</option>
                                    <option>$1000 - $2000</option>
                                    <option>$2000 - $5000</option>
                                    <option>Not willing to share now.</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-3 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
                                    for="reference_site">
                                    Give a reference link (optional)
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="reference_site"
                                    type="text"
                                    placeholder="www.examplesite.com" />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1"
                                    for="upload_link">
                                    Your content Upload link
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="upload_link"
                                    type="link"
                                    placeholder="https://drive.google.com/file/d/1tcZNsoAH5V6_l4DWxU3p_uuJGtvLXlxI/view?usp=sharing"
                                />
                                <p className="text-red-500 text-xs italic">Upload your all asset, design file, text document in google drive/dropbox/wetransfer or any other platform and share the upload link to us.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-2">
                                <label for="timeLine" className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-1">
                                    Time Line <span className='text-red-500'>*</span>
                                </label>
                                <select
                                    id="timeLine"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    required={true}>
                                    <option disabled selected value="">--Select timeline--</option>
                                    <option>Less than 1 month</option>
                                    <option>1 - 3 months</option>
                                    <option>3 - 6 months</option>
                                    <option>6 - 12 months</option>
                                    <option>More than 1 year</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                    for="message">
                                    Tell us a bit about your project...
                                </label>
                                <textarea
                                    rows="10"
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder='Tell us a bit about your project...'
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
        </>
    );
};

export default ContactFormWeb;