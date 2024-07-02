import React from 'react';
import HomeContainer from './HomeContainer';
import Layout from '../../Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const HomePage = () => {
    return (
        <BrowserRouter>
            <Layout>
                <HomeContainer/>
            </Layout>
        </BrowserRouter>
    );
};

export default HomePage;