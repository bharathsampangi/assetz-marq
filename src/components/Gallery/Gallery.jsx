import React from "react"
import styles from "./styles/Gallery.module.css"

const Gallery = () => {
    return (
        <section className={styles.container}>
            <h2>Gallery</h2>
            <div className={styles.galleryContainer}>
                <img className={styles.image1} src="/images/Green-walkways-homepage-gallery.jpg" alt="Green Walkways"/>
                <img className={styles.image2} src="/images/Top-view-of-central-park-homepage-gallery.jpg" alt="Central Park" />
                <img className={styles.image3} src="/images/Clubhouse-Homepage-gallery.jpg" alt="Clubhouse" />
                <img className={styles.image4} src="/images/Green-spaces-homepage-gallery.jpg" alt="Green Spaces"/>
                <img className={styles.image5} src="/images/Township-entrance-2.jpg" alt="Entrance" />
                <img className={styles.image6} src="/images/floorplans-homepage.jpg" alt="Floor Plans" />
                <img className={styles.image7} src="/images/Central-park-2-homepage-gallery.jpg" alt="Central Park 2" />
                <img className={styles.image8} src="/images/Balcony-homepage-gallery.jpg" alt="Balcony" />
            </div>
        </section>
    )
}

export default Gallery