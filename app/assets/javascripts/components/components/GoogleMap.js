
import React from "react";
// import { compose, withProps, lifecycle } from "recompose";
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//     DirectionsRenderer
// } from "react-google-maps";
// import { MarkerWithLabel} from 'react-google-maps'; 


// const About = compose(
//     withProps({
//         /**
//          * Note: create and replace your own key in the Google console.
//          * https://console.developers.google.com/apis/dashboard
//          * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
//          */
//         googleMapURL:
//             "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%` }}> </div>,
//         containerElement: <div style={{ height: `700px` }} />,
//         mapElement: <div style={{ height: `100%` }} />
//     }),
//     withScriptjs,
//     withGoogleMap,
//     lifecycle({
//         componentDidMount() {
//             const DirectionsService = new google.maps.DirectionsService();

//             DirectionsService.route({
//                 origin: new google.maps.LatLng(18.5989, 73.7653),
//                 destination: new google.maps.LatLng(18.590483, 18.590483),
//                 travelMode: google.maps.TravelMode.DRIVING,
//             }, (result, status) => {
//                 if (status === google.maps.DirectionsStatus.OK) {
//                     this.setState({
//                         directions: result,
//                     });
//                 } else {
//                     console.error(`error fetching directions ${result}`);
//                 }
//             });
//         }
//     })
// )(props => (
//     <div>

//         <GoogleMap defaultZoom={8} defaultCenter={{ lat: 18.5989, lng: 73.7653 }} >

//             {props.directions && <DirectionsRenderer directions={props.directions} />}

//             <MarkerWithLabel
//                 position={{ lat: 18.5989, lng: 73.7653 }}
//                 labelAnchor={new google.maps.Point(0, 0)}
//                 labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
//             >
//                 <div>Hello There!</div>
//             </MarkerWithLabel>

//         </GoogleMap>

//     </div>
// ));

// export default About;


const { compose, withProps } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
  OverlayView,
} = require("react-google-maps");

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

const GoogleMaps = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `590px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 49.2853171, lng: -123.1119202 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={8} defaultCenter={props.center}>
    <StreetViewPanorama defaultPosition={props.center} visible>
      <OverlayView
        position={{ lat: 49.28590291211115, lng: -123.11248166065218 }}
          mapPaneName={OverlayView.OVERLAY_LAYER}
          getPixelPositionOffset={getPixelPositionOffset}
      >
        <div style={{ background: `red`, color: `white`, padding: 5, borderRadius: `50%` }}>
          OverlayView
        </div>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
);

export default GoogleMaps;
