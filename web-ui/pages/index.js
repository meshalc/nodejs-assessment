import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import res from './api/resturentServices'
import {Card} from 'react-bootstrap';

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Home = () => {

  useEffect(async () => {
    const data = await res.resturentDeatails();
  }, []);

  return (
    // Todo
    // Need to get data from API and need to fetch based on this
    <>
    <h1>Our Stores</h1>
    <Card>
        <h2>Al Nahdha</h2>
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCDSNTlCDRX8e4Xtv91xq7q_y2Po6eJHbU" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        <h3>Address:</h3>
        <p>NMC Specialty Hospital 7 A St, 
          Al Qusais, Al Nahda 2, 
          Next to Bait AL Khair Building - Dubai
        </p>
      </div>
    </Card>
    </>
  )
}

export default Home