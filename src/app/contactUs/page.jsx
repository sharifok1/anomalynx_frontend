import React from 'react';
import ContractFormTrading from '../share/contactPage/ContractFormTrading';
import Nav from '../share/main_nav/Nav';
import Footer from '../share/footer/Footer';

const page = () => {
    return (
        <div>
            <Nav/>
            <ContractFormTrading/>
            <Footer/>
        </div>
    );
};

export default page;