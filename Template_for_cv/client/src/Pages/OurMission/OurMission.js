import React from 'react'
import styles from './OurMission.module.scss'
import img from '../../Assets/b4.jpg'
function OurMission() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h5>
                            Our Mission</h5>
                        <p>
                            Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                        <button className={styles.btn}>Read more</button>
                    </div>
                    <div className={styles.col}>
                        <img src={img} />
                    </div>
                </div>

            </section>



        </>
    )
}

export default OurMission