import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
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
    const [clickStation, setClickStation] = useState(null);

    useEffect(() => {
        // console.log(station.list);
        setStationArray(station.list)
    }, []);

    const handleClickMarker = (mark) => {
        // console.log('clickMarker');

        const clickStationSerial = (mark.target.options.icon.options.className.split(' ')[0]);
        setClickStation(stationArray.find(station => station.serial === clickStationSerial))
    }
    const handleClickMap = (click) => {
        // console.log('click', click);
        setClickStation(null)

    }
    // console.log('clickStation', clickStation);


    return (
        <>
            <Map
                style={{ height: "80vh" }}
                center={position}
                zoom={map.zoom}
                // zoomControl={false}
                // scrollWheelZoom={false}
                onClick={handleClickMap}

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
                {clickStation && stationArray.map(station => {
                    if (clickStation.serial === station.serial) {
                        return null
                    }
                    return <Polyline
                        key={station.serial}
                        positions={[[clickStation.latitude, clickStation.longitude], [station.latitude, station.longitude]]}
                        color={'RoyalBlue'} />
                })}
            </Map>
        </>
    );
};