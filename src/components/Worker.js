import React from 'react'

import SocialMedia from './SocialMedia' 

function Worker({src, name, charge, p}) {
    return (
        <article className="worker">
            <img className ="worker__image"src={src} alt={name} />
            <h3 className="title worker__title">{name}</h3>
            <h4 className="title worker__sub-title" >{charge}</h4>
            <p className="paragraph worker__paragraph">{p}</p>
            <SocialMedia styles="grey" />
        </article>
    )
}

export default Worker
