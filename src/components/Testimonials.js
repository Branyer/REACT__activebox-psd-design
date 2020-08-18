import React from 'react'
import Testimonial from './Testimonial'

import './Testimonials.css'

function Clients() {
    return (
        <section id="testimonials" className = "testimonials" >
            <div className ="testimonials--container">
                <Testimonial 
                src="./images/testimonial-1.jpg" 
                text="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam..."
                client="SUSAN SIMS, INTERACTION DESIGNER AT XYZ"
                /> 
                <Testimonial 
                src="./images/testimonial-2.jpg" 
                text="Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur...."
                client="SUSAN SIMS, INTERACTION DESIGNER AT XYZ"
                /> 
            </div>
        </section>
    )
}

export default Clients
