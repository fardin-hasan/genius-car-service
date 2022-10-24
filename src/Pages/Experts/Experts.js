import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div id='experts'>
            <h1 className='text-dark text-center'>Our World Class Experts </h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-5 m-auto'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;