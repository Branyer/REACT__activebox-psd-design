import React from 'react'

function Testimonial ({src, text, client}) {

    return (
        <article className="testimonial">
            <img className="testimonial__image" src = {src} alt="testimonial"/>
            <div className="testimonial__text">
                <cite className="testimonial__cite">"{text}"</cite>
                <p className="paragraph testimonial__paragraph">{client}</p>
            </div>
        </article>
    )

} 

export default Testimonial;