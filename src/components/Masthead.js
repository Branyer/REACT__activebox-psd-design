import React from 'react'

import Button from './Button'
import './Masthead.css'

function Masthead() {

    const styles = {
        backgroundImage: `url('./images/banner.jpg')`,
    }

    return (
        <section style={styles} className='masthead'>
            <div className="masthead--container">
                <h1 className="masthead__title">
                Your Favorite One Page
                Multi Purpose Template
                </h1>
                <p className="paragraph masthead__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna
                vel scelerisque nisl consectetur et.
                </p>

                <Button text = "FIND OUT MORE" />
                
            </div>
        </section>
    )
}

export default Masthead
