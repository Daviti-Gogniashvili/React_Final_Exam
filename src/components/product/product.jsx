import React from 'react';
import ProductGrabber from "./productGrabber/productGrabber";
import { products } from './data/data';
import './product.css';

const Product = () => {
    return (
        <section className="pd">
            <div className="pd-texts">
                <h1 className="pd-title">Create & inspire. It's Custom</h1>
                <p className="pd-desc">
                    Everything that you are seeing on covers are real working products
                    you can click and check for yourself.
                </p>
            </div>
            <div className="pd-list">
                {products.map((item) => (
                    <ProductGrabber key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </section>
    );
};

export default Product;
