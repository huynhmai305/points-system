// import dynamic from 'next/dynamic';

// const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
//     ssr: false
// });

// export default () => <DynamicComponentWithNoSSR />;

import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 10.797,
        longitude: 106.667,
        width: "100vw",
        height: "100vh",
        zoom: 18.00
    })
    return (
        <div>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiaHV5bmhtYWkiLCJhIjoiY2sxbG1sbmNjMDdiOTNibW1yc2NhM2RnaSJ9.Q_5TfOAujayDMAKafDBEqw"
                onViewportChange={viewport => {setViewport(viewport)}}
            >
                here
                {/* <Marker>
                    here
                </Marker> */}
            </ReactMapGL>
        </div>
    )
}