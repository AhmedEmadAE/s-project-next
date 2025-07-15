import React from "react";
import styles from "./page.module.css";

export default async function About() {
    async function getproduct() {
        let res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
        let finalRes = await res.json();
        return finalRes.data;
    }

    let allProducts = await getproduct();

    return (
        <div className={styles["products-container"]}>
            {allProducts.map((product) => (
                <div key={product._id} className={styles["product-card"]}>
                    <img src={product.imageCover} alt={product.title} className={styles["product-img"]} />
                    <h2 className={styles["product-title"]}>{product.title}</h2>
                    <p className={styles["product-desc"]}>{product.description}</p>
                    <div className={styles["product-info"]}>
                        <span className={styles["product-price"]}>Price: {product.price} EGP</span>
                        <span className={styles["product-rating"]}>Rating: {product.ratingsAverage} ⭐</span>
                    </div>
                </div>
            ))}
        </div>
    );
}