import React from "react"
import Hero from "../Hero/Hero"
import Overview from "../Overview/Overview"
import Township from "../Township/Township"
import Why from "../Why/Why"
import Amenities from "../Amenities/Amenities"
import Gallery from "../Gallery/Gallery"
import About from "../About/About"

const Home = () => {
    return (
        <>
            <Hero />
            <Township />
            <Overview />
            <Why />
            <Amenities />
            <Gallery />
            <About />
        </>
    )
}

export default Home