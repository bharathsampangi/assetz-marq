import React from "react";
import styles from "./styles/Township.module.css"

const Township = () => {
    return (
        <div className={styles.townshipContainer}>
            <div className={styles.townshipText}>
                <h2 className="pb-sm">The township we call home</h2>
                <p>
                    Sprawled over 22 acres stands Marq,
                    a township with 3 & 4 BHK apartments in Whitefield,
                    for those who have found their space complete with the relaxed air
                    and natural calm that comes with feeling utterly at home.
                </p>
            </div>
            <div className={styles.townshipImage}>
                <img src="/images/Middle-Pic.jpg" />
            </div>
        </div>
    )
}

export default Township