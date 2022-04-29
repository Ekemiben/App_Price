import React from 'react';
import Stylling from "./FullPage.module.css";


import Card from "../Cards/Cards"

import Footer from "../Footer/Footer"

const FullPage = () => {
    return (
        <React.Fragment>
        <div className={Stylling.maincontainer}>
           
            <Card />
            
            <Footer />
        </div>
        </React.Fragment>
    )
}

export default FullPage
