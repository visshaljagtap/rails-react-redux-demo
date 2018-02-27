
import Header from './Header'

import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const About = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places",
        loadingElement:  <div style={{ height: `100%` }}> </div>,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <div>
        
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 18.6297811, lng: 73.7997094 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: 18.6297811, lng: 73.7997094 }} />
            )}
        </GoogleMap>
        
    </div>
));

export default About;
