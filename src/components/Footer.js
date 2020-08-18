import React from 'react'

import SocialMedia from './SocialMedia'

import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__contact">
                <div className="contact__location">
                    <h3 className="title">Location</h3>
                    <p className="paragraph">3481 Melrose PlaceBeverly Hills, CA 90210</p>
                </div>
                <div className="contact__social-media">
                    <h3 className="title">Share with love</h3>
                    <SocialMedia styles="blue" />
                </div>
                <div className="contact__about">
                    <h3 className="title">About Activebox</h3>
                    <p className="paragraph">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </div>
            </section>
            <section className ="footer__copy-rigth">
                <p className="paragraph">Copyright © 2015 ActiveBox. All Rights Reserved</p>
            </section>
        </footer>
    )
}

export default Footer
