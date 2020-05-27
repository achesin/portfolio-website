import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default (props) => (
    <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
    >
        <FrontSide
            style={{
                backgroundColor: '#41669d',
            }}
        >
            John Cardoza
        </FrontSide>
        <BackSide
            style={{ backgroundColor: '#175852'}}>
            54 Below
            March 2, 2020
            <a href="/arizona-band/" class="button button-portfolio button-small">Full Portfolio</a>
        </BackSide>
    </Flippy>
)