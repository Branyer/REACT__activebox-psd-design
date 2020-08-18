import React from 'react'

function Work({src, projectName: name, description: desc }) {
    return (
        <article className="work">
            <img className="work__image"src={src} alt = "work"/>    
            <section>
                <h3 className="title work__title">{name}</h3>
                <p className="paragraph work__paragraph">{desc}</p>
            </section>
        </article>
    )
}

export default Work
