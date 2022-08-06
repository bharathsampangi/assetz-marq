import React from "react"
import styles from "./styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.image} src="/images/Assetz-Marq-Logo.png" alt="Logo"/>
        </div>
    )
}

export default Header