import React from "react";
import styles from "./styles/Why.module.css"

const Why = () => {
    return (
        <section className={styles.container}>
            <div className={styles.whyContainer}>
                <div className={styles.image}>
                    <img src="/images/Park.jpeg" />
                </div>
                <div className={styles.textContainer}>
                    {/* <div> */}
                        <h2>Why Marq?</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>A sprawling 22-acre township with 6 acres of parks</li>
                            <li className={styles.listItem}>Ample space for green walkways</li>
                            <li className={styles.listItem}>Find a bit of green everywhere you go</li>
                            <li className={styles.listItem}>No limit to leisure at the 38,000 Sqft clubhouse</li>
                        </ul>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default Why