import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout';
import Restaurants from "./components/restaurants";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Layout>
    <Restaurants/>
</Layout>)
