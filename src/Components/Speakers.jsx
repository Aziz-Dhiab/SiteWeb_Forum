import React from 'react'
import "../Assets/css/speakers.css"
import image from '../Assets/images/img.jfif'

function Speakers() {
    return (
    <div className = "speakers_body">
        <div className = "slider_speakers">
            <span style = {{"--i":4}}><div><img src = {image} alt = ""></img>Speaker 1</div></span>
            <span style = {{"--i":3}}><div><img src = {image} alt = ""></img>Speaker 2</div></span>
            <span style = {{"--i":2}}><div><img src = {image} alt = ""></img>Speaker 3</div></span>
            <span style = {{"--i":1}}><div><img src = {image} alt = ""></img>Speaker 4</div></span>
        </div>
    </div>
    )
}

export default Speakers
