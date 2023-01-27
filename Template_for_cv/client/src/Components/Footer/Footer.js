import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../Assets/footer.png'
import styles from './Footer.module.scss'
function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <Row >
                        <Col className={styles.col} lg={3}>

                            <img src={image} alt='footerlogo' />
                            <div className={styles.mainDiv}><input placeholder='Your Email' /><button className={styles.btn}>Send</button></div>

                        </Col>
                        <Col className={styles.col} lg={3}>
                            <ul>
                                <p>About</p>
                                <li>About us</li>
                                <li>Our Partners</li>
                                <li>Our Services</li>
                            </ul>
                        </Col>
                        <Col className={styles.col} lg={3}> <ul>
                            <p>About</p>
                            <li>About us</li>
                            <li>Our Partners</li>
                            <li>Our Services</li>
                        </ul></Col>
                        <Col className={styles.col} lg={3}> <ul>
                            <p>About</p>
                            <li>About us</li>
                            <li>Our Partners</li>
                            <li>Our Services</li>
                        </ul></Col>
                    </Row>
                </Container>

            </footer>


        </>
    )
}

export default Footer