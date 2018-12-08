import React from 'react';
import Slider from './Slider'
import Countdown from './countdown';

const Featured = () => {
    return (
        <div style= {{ position : 'relative'}}>
            <Slider />
            <div className="artist_name">
                <div className="wrapper">
                    Aquaman
                </div>
            </div> 
            <Countdown />
        </div>
    );
}

export default Featured ;
