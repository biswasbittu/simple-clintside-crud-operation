import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Accounts = () => {
    const accounts = useLoaderData();
    console.log(accounts);
    return (
        <div>
            <h1>Accounts:</h1>
        </div>
    );
};

export default Accounts;