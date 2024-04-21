import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An e-commerce website is an online platform that facilitates the
                    buying and selling of products or services over the internet. It
                    serves as a virtual marketplace where business and individual can
                    showcase their products, interact with customers, and conduct
                    transaction without the need for a physical presence. E-commerce
                    websites have gaine immense popularity due to their convenience,
                    accessibility, and the global reach they offer.
                </p>
                <p>
                    E-commerce websites typically display products or
                    services along with detailed description, images,
                    prices, and any available variations
                    (e.g,sizes,color).  Each product usually
                    has its own dedicated page with relevat information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox