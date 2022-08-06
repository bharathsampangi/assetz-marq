import React from "react"
import styles from "./styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Privacy Policy & Disclaimer: Any content mentioned in this website is for information 
                purpose only and not to be considered as an official website.
            </p>
            <p>&copy;2022 All Rights Reserved</p>
        </footer>
    )
}

export default Footer