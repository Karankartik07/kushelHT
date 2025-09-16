
'use client'
import React from 'react';
import "./CallAction.css";
import { IoIosArrowForward } from "react-icons/io";

const CallAction = () => {
    return (
        <div className='magento-action-call-wrapper'>

            <div className='magento-action-call-content-box'>
                    <div className="magento-action-call-content-left">
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744106106/pexels-olly-3778966-scaled_dbxnkv.webp" alt="image-" />
                    </div>
                    <div className="magento-action-call-content-right">
                        <h3>Ready to fix the problems holding your store back?</h3>
                        <p>Book your free discovery call to see how we can build or optimize your eCommerce store and drive your growth.</p>

                        <div className="magento-action-call-content-button-wrap">
                            <span className='magento-action-call-btn-text'>Book your free discovery call</span>
                            <span className='magento-action-call-btn-icon-wrap'><IoIosArrowForward className='magento-action-call-btn-icon'/></span>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default CallAction