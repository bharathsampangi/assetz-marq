import React from "react"
import Hero from "../Hero/Hero"
import Overview from "../Overview/Overview"
import Township from "../Township/Township"
import Why from "../Why/Why"
import Amenities from "../Amenities/Amenities"

const Home = () => {
    return (
        <>
            <Hero />
            <Township />
            <Overview />
            <Why />
            <Amenities />
        </>
    )
}

export default Home