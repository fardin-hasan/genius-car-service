import React from 'react';
import { useParams } from 'react-router-dom';

const ExpertDetail = () => {
    const{expertsId}=useParams();
    return (
        <div>
            <h1>My User Id is : {expertsId}</h1>
        </div>
    );
};

export default ExpertDetail;