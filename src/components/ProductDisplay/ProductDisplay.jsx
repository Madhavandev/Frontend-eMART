import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    // Null check for product
    if (!product) {
        return <div>No product found</div>;
    }

    // Default values for properties
    const image = product.image || ''; // Provide a default image if product.image is missing
    const name = product.name || 'Product Name';
    const oldPrice = product.old_price || '0';
    const newPrice = product.new_price || '0';

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{oldPrice}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{newPrice}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight usually knitted, pullover shirt, close-fitting and ith a
                    round neckline and short sleeves, oen as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className="cartbtn" onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category : </span>Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
