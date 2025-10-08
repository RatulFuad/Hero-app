import React from 'react';
import { useParams } from 'react-router';

const AppDetails  = () => {

    const {id}= useParams();
    return (
        <div>
            <h1>app details: {id}</h1>
        </div>
    );
};

export default AppDetails ;