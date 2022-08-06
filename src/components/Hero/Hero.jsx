import React from "react"
import styles from "./styles/Hero.module.css"

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className="pb-sm">Assetz Marq 3</h1>
                    <h2>Premium & Luxury Apartments by Assetz Property Group in Kannamangala, Whitefield-Hoskote Road, East Bangalore</h2>
                </div>
            </div>
            <div className={styles.heroImage}>
                <img src="/images/Assetz-Marq-Apartments-in-Kannamangala-Whitefield-1.jpeg" alt="Hero" />
            </div>
        </div>
    )
}

export default Hero