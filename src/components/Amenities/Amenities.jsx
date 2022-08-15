import React, { useEffect } from "react";
import styles from "./styles/Amenities.module.css"

const Amenities = () => {

    useEffect(() => {
        document.getElementById('health').style.display = 'block'
    }, [])

    const handleClick = (event, clsName) => {
        let altClass = clsName === 'health' ? 'others' : 'health'
        document.getElementById(clsName).style.display = 'block'
        document.getElementById(altClass).style.display = 'none'
    }

    return (
        <section id="amenities" className={styles.container}>
            <h2>Amenities</h2>
            <div className={styles.amenitiesContainer}>
                <div className={styles.amenitiesTabs}>
                    <div className={styles.tab}>
                        <div className={styles.link} onClick={(e) => handleClick(e, 'health')}>Health & Sports</div>
                        <div id="health" className={`${styles.list}`}>
                            <ul className={styles.listAmenities}>
                                <li>Badminton courts</li>
                                <li>Squash court</li>
                                <li>Indoor gymnasium</li>
                                <li>Table tennis</li>
                                <li>Basketball court</li>
                                <li>Outdoor gym</li>
                                <li>Pool tables</li>
                                <li>Jogging track</li>
                                <li>Aerobics studio</li>
                                <li>Billiards table</li>
                                <li>Steam & changing rooms</li>
                                <li>Tennis court</li>
                                <li>Skating rink</li>
                                <li>Volleyball court</li>
                                <li>Regular swimming pools & kids’ pool</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.link} onClick={(e) => handleClick(e, 'others')}>Others</div>
                        <div id="others" className={`${styles.list}`}>
                            <ul className={styles.listAmenities}>
                                <li>In-campus school – Chrysalis High Marq</li>
                                <li>Creche</li>
                                <li>Kids’ play area</li>
                                <li>Linear park</li>
                                <li>Party halls</li>
                                <li>Party lawn</li>
                                <li>Pet park</li>
                                <li>Amphitheatre</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.amenitiesImage}>
                    <img src="/images/amenities.jpeg" alt="Amenities" />
                </div>
            </div>
        </section>
    )
}

 export default Amenities