import React, { useEffect, useState } from 'react';
import './Products.css';
export default function Products() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=8&select=title,description,price,discountPercentage,thumbnail');
        const data = await response.json();
        setProducts(data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="container">
            <div className="heading">
                <h1>Our Products</h1>
            </div>
            <div className="products-container">
                {products.map(product => (
                    <div key={product.title} className="product-card">
                        <div className="img-container">
                            <img src={product.thumbnail} alt="" />
                        </div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div className="prices">
                            <span className="current-price">{(product.price - (product.discountPercentage / 100) * product.price).toFixed(2)} $</span>
                            <span className="old-price">{(product.price).toFixed(2)} $</span>
                        </div>
                        <div className="btns-container">
                            <button className="cart-btn">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <span>Add to cart</span>
                            </button>
                            <button className="fav-btn">
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}