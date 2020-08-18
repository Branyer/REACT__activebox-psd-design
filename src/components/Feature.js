import React from 'react'

function Feature({src, title, p}) {
    return (
        <article className="feature">
            <img src = {src} alt="layer"/>    
            <h3 className="title">{title}</h3>    
            <p className="paragraph">{p}</p>
        </article>
    )
}

export default Feature
