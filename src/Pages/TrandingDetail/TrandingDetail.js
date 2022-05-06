import React from 'react';
import { useParams } from 'react-router-dom';

const TrandingDetail = () => {
    const { trandingId } = useParams();
    return (
        <div>
            <h2>Welcome To Detail:{trandingId}</h2>
        </div>
    );
};

export default TrandingDetail;