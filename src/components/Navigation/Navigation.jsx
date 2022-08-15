import React from "react"
import styles from "./styles/Navigation.module.css"

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <img className={styles.image} src="/images/Assetz-Marq-Logo.png" alt="Logo"/>
            <nav>
                <ul className={styles.navigationList}>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#amenities">Amenities</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation