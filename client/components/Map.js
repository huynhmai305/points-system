import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import { Button } from 'reactstrap'

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
    "pk.eyJ1IjoiaHV5bmhtYWkiLCJhIjoiY2sxbG1sbmNjMDdiOTNibW1yc2NhM2RnaSJ9.Q_5TfOAujayDMAKafDBEqw";
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: "100vw",
                height: "100vh",
                latitude: 42.430472,
                longitude: -123.334102,
                zoom: 16
            },
            searchResultLayer: null,
            userLocation: {}
        };
    }
    mapRef = React.createRef();

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let setUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            let newViewport = {
                height: "100vh",
                width: "100vw",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 10
            }
            this.setState({
                viewport: newViewport,
                userLocation: setUserLocation
            })
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    resize = () => {
        this.handleViewportChange({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    };

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };
        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    handleOnResult = event => {
        this.setState({
            searchResultLayer: new GeoJsonLayer({
                id: "search-result",
                data: event.result.geometry,
                getFillColor: [255, 0, 0, 128],
                getRadius: 1000,
                pointRadiusMinPixels: 10,
                pointRadiusMaxPixels: 10,
            })
        });
    };

    render() {
        const { viewport, searchResultLayer } = this.state;
        return (
            <div>
                <div className="map">
                    <ReactMapGL
                        ref={this.mapRef}
                        {...viewport}
                        onViewportChange={this.handleViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                    >
                        <img src="/static/images/search_location.png" onClick={this.setUserLocation} className="location-btn"/>
                        <Geocoder
                            mapRef={this.mapRef}
                            onResult={this.handleOnResult}
                            onViewportChange={this.handleGeocoderViewportChange}
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            position="top-left"
                        />
                        {Object.keys(this.state.userLocation).length !== 0 ? (
                            <Marker
                                latitude={this.state.userLocation.lat}
                                longitude={this.state.userLocation.long}
                            >
                                <div className="location-icon">
                                    <img src="/static/images/location.png"/>
                                </div>
                            </Marker>
                        ) : (
                                <div>Empty</div>
                            )}
                        {/* <DeckGL {...viewport} layers={[searchResultLayer]} /> */}
                    </ReactMapGL>
                </div>
            </div>
        );
    }
}
