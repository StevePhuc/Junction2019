import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import './icon.css'
import station from '../../data/station.json'



export default () => {
    const map = {
        lat: 60.165,
        lng: 24.948,
        zoom: 14,
        number: 1
    };

    const position = [map.lat, map.lng];

    const [stationArray, setStationArray] = useState([]);

    useEffect(() => {
        // console.log(station.list);

        setStationArray(station.list)
    }, []);

    const handleClickMarker = (mark) => {
        console.log(mark.target.options.icon.options.className.split(' ')[0]);
    }

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
                {stationArray.map(station => {
                    const stationPosition = [station.latitude, station.longitude];
                    return (
                        <Marker
                            key={station.serial}
                            position={stationPosition}
                            icon={L.divIcon({
                                className: `${station.serial} my-div-icon `
                            })}
                            onClick={handleClickMarker}
                            opacity={0.8}
                        >
                            <Popup>
                                {`Station:${station.description}`}
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>
        </>
    );
};