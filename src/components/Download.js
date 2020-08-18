import React from 'react'
import Button from './Button'


import './Download.css'

function Download() {
    return (
        <section id="download" className ="download">
            <div className="download--container">
                <h2 className="title download__title">Are You Ready to Start? Download Now For Free!</h2>
                <p className="paragraph">FUSCE DAPIBUS, TELLUS AC CURSUS COMMODO</p>
                <Button text ="DOWNLOAD FOR FREE"/>
            </div>
        </section>
    )
}

export default Download
