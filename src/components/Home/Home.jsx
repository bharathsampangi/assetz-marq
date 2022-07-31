import React from "react"
import styles from "./styles/Home.module.css"

const Home = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className="pb-sm">Assetz Marq 3</h1>
                    <h2>Premium & Luxury Apartments by Assetz Property Group in Kannamangala, Whitefield-Hoskote Road, East Bangalore</h2>
                </div>
            </div>
            <div className={styles.heroImage}>
                
            </div>
        </div>
    )
}

export default Home