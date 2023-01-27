import React from 'react'
import styles from './OurTeam.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../Assets/portr1.jpg'
function OurTeam() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.textCenter}>
                    <h3 className={styles.firsth3}>
                        Devoted to wonderful beauty</h3>
                    <h3> Events Pricing</h3>
                </div>
                <Container>
                    <div className={styles.divContainer}>
                        <Row className={styles.roww}>

                            <Col xs={12} md={4} lg={4} sm={12} className={styles.col}>
                                <div className={styles.card} >
                                    <img src={image} />
                                    <h5 className={styles.firstP}>
                                        Velva Kopf
                                    </h5>
                                    <p className={styles.secP}>
                                        Biologist
                                    </p>

                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={4} sm={12} className={styles.col}>
                                <div className={styles.card} >
                                    <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg' />
                                    <p className={styles.firstP}>
                                        Sarah Palmer
                                    </p>
                                    <p className={styles.secP}>
                                        Florist
                                    </p>

                                </div>
                            </Col>   <Col xs={12} md={4} lg={4} sm={12} className={styles.col}>
                                <div className={styles.card} >
                                    <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg' />
                                    <p className={styles.firstP}>
                                        Jessica Swift
                                    </p>
                                    <p className={styles.secP}>
                                        Photographer
                                    </p>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>


            </section>


        </>
    )
}

export default OurTeam