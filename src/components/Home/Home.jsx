import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);

    return (
        <div>
            <h2>This is home {tshirts.length}</h2>
        </div>
    );
};

export default Home;