import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import station from '../data/station.json'



export default () => {
    const map = {
        lat: 60.169744,
        lng: 24.933468,
        zoom: 13,
        number: 1
    };

    const position = [map.lat, map.lng];

    const [tramsArray, setTramsArray] = useState([]);

    useEffect(() => {
        console.log(station.list);

        setTramsArray(station.list)
    }, []);

    return (
        <>
            <Map
                style={{ height: "80vh" }}
                center={position}
                zoom={map.zoom}
            // zoomControl={false}
            // scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://cdn.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png"
                />
                {tramsArray.map(tram => {
                    const tramPosition = [tram.latitude, tram.longitude];
                    return (
                        <Marker
                            key={tram.serial}
                            position={tramPosition}
                            // icon={L.divIcon({
                            //     className: `${tram.color} my-div-icon vh-${tram.veh} route desi-${tram.desi} `
                            // })}
                            opacity={0.8}
                        >
                            <Popup>
                                {`Tram Number:${tram.veh}`}
                                <br />
                                {`Congestion Rate:${Math.round(tram.congestionRate * 100) / 100}`}
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>
        </>
    );
};