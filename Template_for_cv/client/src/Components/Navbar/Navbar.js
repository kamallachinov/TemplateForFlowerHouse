import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
function Navbar() {
    return (
        <>
            <div>
                <nav className={styles.navbar}>
                    <h3>Floral Studio</h3>
                    <ul className={styles.list}>
                        <li><Link to='/' className={styles.link}>Home</Link></li>
                        <li >About us</li>
                        <li ><Link to='/add' className={styles.link}>Add new</Link></li>
                        <li>Pricing</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>


        </>
    )
}

export default Navbar