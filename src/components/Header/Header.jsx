import React from "react"
import styles from "./styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.image} src="/images/Assetz-Marq-Logo.png" />
            {/* <nav>
                <ul>
                    <li>Overview</li>
                </ul>
            </nav> */}
        </div>
    )
}

export default Header