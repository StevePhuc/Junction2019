import React, { useState } from 'react';
import '../../App.css';
import MyMap from './MyMap';
import SwitchComp from './SwitchComp'

export default function Home() {
    const [stateSwitch, setStateSwitch] = useState({
        cor: true,
        flow: false,
    });

    return (
        <>
            <div className='map-header'>
                <h1 className='title'>Map</h1>
                <SwitchComp stateSwitch={stateSwitch} setStateSwitch={setStateSwitch} />
            </div>

            <MyMap stateSwitch={stateSwitch} />
        </>
    );
}