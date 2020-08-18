import React from 'react'
import Feature from './Feature'
import './Features.css'

function Features() {
    return (
        <section id="features" className="features">
            <div className="features--container">
                <Feature 
                src = "./images/Layer-48.png"
                title ="Easily Customed" 
                p = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non " 
                />
                <Feature 
                src = "./images/Layer-44.png"
                title ="Responsive Ready"
                p = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non " 
                />
                <Feature 
                src = "./images/Layer-47.png"
                title ="Modern Desing" 
                p = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non " 
                />
                <Feature 
                src = "./images/Layer-46.png"
                title ="Clean Code" 
                p = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non " 
                />
                <Feature 
                src = "./images/Layer-43.png"
                title ="Ready to Ship" 
                p = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non " 
                />
                <Feature 
                src = "./images/Layer-45.png"
                title ="Download for Free"
                p = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non " 
                />
            </div>
        </section>
    )
}

export default Features
