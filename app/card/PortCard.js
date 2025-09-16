
import React from 'react'
import Image from 'next/image';
const PortCard = (props) => {
    return (
        <>
            <div className="port-card mx-4 mb-7">
                <div className="port-card1 relative">
                    <Image className='h-full w-full hghglol' src={props.pads} alt="Custom online ecommerce solutions" width={374} height={400}/>
                <a href={props.link} target={props.target} rel="noopener noreferrer"><button className='absolute'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button></a>
                </div>
                <div className="port-card2 p-4 bg-white">
                    <b className="font-semibold text-xl">{props.heading}</b>
                    <p className='text-xl mt-2 lorem'>{props.para}</p>
                </div>
            </div>
        </>
    );
};

export default PortCard;
