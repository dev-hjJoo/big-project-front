import React from 'react';
import Router from './Router';
import Layout from '../Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const HomePage = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Router/>
            </Layout>
        </BrowserRouter>
    );
};

export default HomePage;