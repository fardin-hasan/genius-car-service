import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Expert.css'

const Expert = ({ expert }) => {
    const { id, name, age, img } = expert;
    const navigate = useNavigate();

    const navigateToExpertId = (id) => {

        navigate(`/experts/${id}`);


    }

    return (

        <div className="col  ">
            <div className="card  shadow-lg pb-3 mb-5 bg-body mx-5 card-border ">
                <img src={img} className="w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p><b>Age:{age}</b></p>
                    <div className='text-center'>
                        <button onClick={() => navigateToExpertId(id)} className=' btn btn-primary  '>Book Now</button>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Expert;