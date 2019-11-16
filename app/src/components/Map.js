import React from 'react';
import '../App.css';
import Scatter from '../components/charts/Scatter'


export default function Home() {

    return (
        <main className="main">
            <h1>Map</h1>
            <Scatter />
        </main>
    );
}