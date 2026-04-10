import React from 'react';

/**
 * ProductCard component to display individual product information.
 * 
 * @param {Object} props
 * @param {string} props.name - Name of the product
 * @param {number} props.price - Price of the product
 * @param {string} props.category - Category of the product
 */
const ProductCard = ({ name, price, category }) => {
    return (
        <div className="product-card">
            <span className="product-category">{category}</span>
            <h3 className="product-name">{name}</h3>
            <div className="product-price">
                {price.toLocaleString()}
            </div>
            <button className="buy-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
