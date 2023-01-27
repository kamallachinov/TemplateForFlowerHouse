import React, { useState, useEffect } from 'react'
import styles from './Products.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image4 from '../../Assets/b4.jpg'
import Button from '@mui/material/Button';
import axios from 'axios'
function Products() {
    const [products, setProducts] = useState([])
    const [sort, setSort] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setProducts(res.data))
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`)
        const deleteItem = products.filter(item => item._id != id)
        setProducts(deleteItem)
    }
    const handleSort = () => {
        setSort(!sort)
    }
    const [input, setInput] = useState("")
    const search = (e) => {
        setInput(e.target.value)
    }
    return (
        <>
            <section className={styles.section}>
                <div className={styles.textCenter}>
                    <h3 className={styles.firsth3}>
                        Devoted to wonderful beauty</h3>
                    <h3> Flowers Pricing</h3>
                    <button className={styles.btn} onClick={handleSort}>Sort by price</button>
                    <input onChange={search} value={input} placeholder='Search for item..' />
                </div>
                <Container>
                    <div className={styles.divContainer}>
                        <Row className={styles.roww}>
                            {sort === false ?
                                products
                                    .filter(item => input == "" ? products : item.name.toLowerCase().includes(input.toLowerCase()))
                                    .sort((a, b) => (a.price > b.price) ? 1 : -1)
                                    .map(product => (
                                        <Col xs={12} md={4} lg={4} sm={12} key={product._id}>
                                            <div className={styles.card} >
                                                <img src={product.imgUrl} />
                                                <p className={styles.firstP}>{product.name}</p>
                                                <p className={styles.secP}>{product.price}$</p>
                                                <Button variant="contained" color="success" onClick={() => handleDelete(product._id)}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </Col>
                                    )) : products
                                        .filter(item => input == "" ? products : item.name.toLowerCase().includes(input.toLowerCase()))
                                        .map(product => (
                                            <Col xs={12} md={4} lg={4} sm={12} key={product._id}>
                                                <div className={styles.card} >
                                                    <img src={product.imgUrl} />
                                                    <p className={styles.firstP}>{product.name}</p>
                                                    <p className={styles.secP}>{product.price}$</p>
                                                    <Button variant="contained" color="success" onClick={() => handleDelete(product._id)}>
                                                        Delete
                                                    </Button>
                                                </div>
                                            </Col>
                                        ))
                            }
                        </Row>
                    </div>
                    <div className={styles.textCenter}>
                        <h3 className={styles.firsth3}>
                            Devoted to wonderful beauty</h3>
                        <h3> Events Pricing</h3>
                    </div>
                    <div className={styles.divContainer}>
                        <Row className={styles.roww}>
                            <Col xs={12} md={4} lg={4} sm={12} >
                                <div className={styles.cardd} >
                                    <h6>$16 <sub>per table</sub></h6>
                                    <p className={styles.firstPP}>Birthday Events</p>
                                    <p className={styles.secPP}>Lorem ipsum dolor
                                        sit amet laudem
                                        partem perfecto per
                                    </p>
                                    <button className={styles.btn}>Shop now</button>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={4} sm={12} >
                                <div className={styles.cardd} >
                                    <h6>$16 <sub>per table</sub></h6>
                                    <p className={styles.firstPP}>Birthday Events</p>
                                    <p className={styles.secPP}>Lorem ipsum dolor
                                        sit amet laudem
                                        partem perfecto per
                                    </p>
                                    <button className={styles.btn}>Shop now</button>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={4} sm={12} >
                                <div className={styles.cardd} >
                                    <h6>$16 <sub>per table</sub></h6>
                                    <p className={styles.firstPP}>Birthday Events</p>
                                    <p className={styles.secPP}>Lorem ipsum dolor
                                        sit amet laudem
                                        partem perfecto per
                                    </p>
                                    <button className={styles.btn}>Shop now</button>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </section>


        </>
    )
}

export default Products