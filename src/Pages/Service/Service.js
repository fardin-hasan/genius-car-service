import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='col'>
            <div className='card shadow-lg pb-3 mb-5 bg-body mx-5 card-border'>
                <img src={img} className='w-100' alt="" />
                <h5 className="card-title text-center">{name} </h5>
                <p className='text-center'><b>Price :</b> {price}</p>
                <p className='text-center p-1'>Description : {description}</p>
            </div>

        </div>
    );
};

export default Service;