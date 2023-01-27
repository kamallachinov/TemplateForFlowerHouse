import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Create.module.scss'
import axios from 'axios';
import { Helmet } from "react-helmet";

function Create() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add new</title>
                <link rel="canonical" />
            </Helmet>
            <Formik
                initialValues={{ imgUrl: '', name: '', price: '' }}
                validationSchema={Yup.object({
                    imgUrl: Yup.string()
                        .min(10, 'Must be minimum 10 characters or more')
                        .required('Required'),
                    name: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    price: Yup.number().required('Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    resetForm()
                    const myObj = {
                        imgUrl: values.imgUrl,
                        name: values.name,
                        price: values.price
                    }
                    axios.post("http://localhost:5000/products", myObj)
                }}
            >
                {formik => (
                    <div className={styles.formContainer}>
                        <form onSubmit={formik.handleSubmit} className={styles.form}>
                            <label htmlFor="imgUrl">imgUrl</label>
                            <input
                                id="imgUrl"
                                type="text"
                                {...formik.getFieldProps('imgUrl')}
                            />
                            {formik.touched.imgUrl && formik.errors.imgUrl ? (
                                <div>{formik.errors.imgUrl}</div>
                            ) : null}

                            <label htmlFor="name">NAME</label>
                            <input
                                id="name"
                                type="text"
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div>{formik.errors.name}</div>
                            ) : null}

                            <label htmlFor="price">price</label>
                            <input id="price" type="number" {...formik.getFieldProps('price')} />
                            {formik.touched.price && formik.errors.price ? (
                                <div>{formik.errors.price}</div>
                            ) : null}

                            <button type="submit" className={styles.btn}>Submit</button>
                        </form>
                    </div>
                )}
            </Formik>

        </>
    )
}

export default Create