import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Teste(props) {
    return (
        <Slider
            step={props.escala}
            onChange={props.change}
            value={props.value}
            min={props.min}
            max={props.max}
            handleStyle={{
                width: '20px',
                height: '20px',
                boxShadow: '0 0 6px 0 rgba(0,0,0, 0.09)',
                borderColor: '#fff',
                border: 'solid 2px #dbdbdb'
            }}
            trackStyle={{
                backgroundColor: props.colors[0] ? props.colors[0] : '#00baf7',
                height: '13px',
                borderRadius: '20px'
            }}

            railStyle={{
                backgroundColor: props.colors[1] ? props.colors[1] : '#ff944d',
                height: '13px',
                opacity: 1,
                borderRadius: '20px'
            }}>
        </Slider>
    );
}

export default Teste;