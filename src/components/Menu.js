import React from 'react'

import MenuItem from './MenuItem'


function Menu() {
    return (
        <ul className = "header__menu">
            <MenuItem text="Features" href="#features"/>                 
            <MenuItem text="Works" href="#works"/>                     
            <MenuItem text="Our Team" href="#our-team"/>             
            <MenuItem text="Testimonials" href="#testimonials"/> 
            <MenuItem text="Download" href="#download"/> 
        </ul>
    )
}

export default Menu
