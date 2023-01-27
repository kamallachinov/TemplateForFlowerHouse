import React from 'react'
import styles from './Header.module.scss'
import Carousel from 'nuka-carousel';
import image1 from '../../Assets/roza.jpg'
import image2 from '../../Assets/Agroza.jpg'
import image3 from '../../Assets/More.jpg'

export default class extends React.Component {
    render() {
        return (
            <Carousel autoplay className={styles.carousel}>
                <div className={styles.img}>
                    <img src={image1} alt="image1" />
                    <div className={styles.info}>
                        <h5 className={styles.title}>Floral</h5>
                        <h5>Excellent bouquets for you</h5>
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={image2} alt="image1" />
                    <div className={styles.info}>
                        <h5 className={styles.title}>Floral</h5>
                        <h5>Excellent bouquets for you</h5>
                    </div>
                </div>
               
                <div className={styles.img}>
                    <img src={image3} alt="image1" />
                    <div className={styles.info}>
                        <h5 className={styles.title}>Floral</h5>
                        <h5>Excellent bouquets for you</h5>
                    </div>
                </div>
               
               
            </Carousel>
        );
    }
}
