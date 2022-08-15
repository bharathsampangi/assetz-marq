import React from "react"
import styles from "./styles/Overview.module.css"

const Overview = () => {
    return (
        <section id="overview" className={styles.container}>
            <h2>Overview</h2>
            <div className={styles.overviewContainer}>
                <div className={styles.overviewRow}>
                    <div className={styles.overviewItem}>
                        <div>Configuration</div>
                        <div>3 & 4 BHK</div>
                    </div>
                    <div className={styles.overviewItem}>
                        <div>Starting Price</div>
                        <div>₹ 1.21 Cr * Onwards</div>
                    </div>
                </div>
                <div className={styles.overviewRow}>
                    <div className={styles.overviewItem}>
                        <div>Status</div>
                        <div>Under Construction</div>
                    </div>
                    <div className={styles.overviewItem}>
                        <div>Towers</div>
                        <div>08 Towers</div>
                    </div>
                </div>
                <div className={styles.overviewRow}>
                    <div className={styles.overviewItem}>
                        <div>Units</div>
                        <div>1600+ units</div>
                    </div>
                    <div className={styles.overviewItem}>
                        <div>Size</div>
                        <div>1366 - 2309 Sqft</div>
                    </div>
                </div>
                <div className={styles.overviewRow}>
                    <div className={styles.overviewItem}>
                        <div>Location</div>
                        <div>Off Whitefield Road - Hoskote Road</div>
                    </div>
                    <div className={styles.overviewItem}>
                        <div>Township Area</div>
                        <div>22 acres</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview