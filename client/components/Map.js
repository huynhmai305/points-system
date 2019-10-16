import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

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
            storeLocation: [],
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

    fetchStationAPI = () => {
        // fetch(`https://localhost:3000/admin/store`)
        fetch(`https://data.cityofnewyork.us/resource/yjub-udmw.json`)
        .then(res => res.json())
        .then(storeLocation => {
            let freeWifi = this.filterFreeWifi(storeLocation);
            this.setState({ storeLocation: freeWifi });
        });
    };
    filterFreeWifi = hotspots => {
        return hotspots.filter(spot => {
            return spot.type === "Free";
        });
    };
    loadWifiMarkers = () => {
        return this.state.storeLocation.map(spot => {
            return (
                <Marker
                    key={spot.objectid}
                    latitude={parseFloat(spot.latitude)}
                    longitude={parseFloat(spot.longitude)}
                >
                    <div className="location-icon">
                        here
                    </div>
                </Marker>
            );
        });
    };
    componentDidMount() {
        this.fetchStationAPI();
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
                        <img src="/static/images/search_location.png" onClick={this.setUserLocation} className="location-btn" alt="my_location"/>
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
                                    <img src="/static/images/location.png" alt="location"/>
                                </div>
                            </Marker>
                        ) : (
                            <div>Không tìm thấy</div>
                        )}
                        {this.loadWifiMarkers()}
                        {/* <DeckGL {...viewport} layers={[searchResultLayer]} /> */}
                    </ReactMapGL>
                </div>
            </div>
        );
    }
}
