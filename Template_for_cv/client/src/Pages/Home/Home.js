import React from 'react'
import Header from '../Header/Header'
import OurMission from '../OurMission/OurMission'
import OurTeam from '../OurTeam/OurTeam'
import Products from '../Products/Products'
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" />
            </Helmet>
            <Header />
            <OurMission />
            <Products />
            <OurTeam />
        </>
    )
}

export default Home