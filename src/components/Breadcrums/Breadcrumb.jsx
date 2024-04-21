import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumb = (props) => {
    const { product } = props;

    return (
        <div className="breadcrum">
            Home <img src={arrow_icon} alt="" /> SHOP
            {product?.category && (
                <>
                    <img src={arrow_icon} alt="" /> {product.category}
                </>
            )}
            {product?.name && (
                <>
                    <img src={arrow_icon} alt="" /> {product.name}
                </>
            )}
        </div>
    );
};

export default Breadcrumb;
