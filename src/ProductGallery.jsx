import React from 'react';
import ProductCard from './ProductCard';
import './ProductGallery.css';

/**
 * ProductGallery component that renders a list of ProductCards.
 */
const ProductGallery = () => {
    // Dummy product data with English variable names
    const products = [
        {
            id: 1,
            name: "Cyber Pulse Headphones",
            price: 299.99,
            category: "Audio"
        },
        {
            id: 2,
            name: "Nebula Mechanical Keyboard",
            price: 159.50,
            category: "Peripherals"
        },
        {
            id: 3,
            name: "Titan GPU X1",
            price: 1200.00,
            category: "Hardware"
        },
        {
            id: 4,
            name: "Prism Gaming Mouse",
            price: 89.99,
            category: "Peripherals"
        }
    ];

    return (
        <section className="gallery-section">
            <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem', 
                textAlign: 'center',
                background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                Featured Products
            </h2>
            <div className="gallery-container">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        category={product.category} 
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductGallery;
// Alias for Spanish request if needed by user, but following English rule for internals
export { ProductGallery as GaleriaProductos };
