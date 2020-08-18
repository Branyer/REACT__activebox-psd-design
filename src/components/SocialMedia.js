import React from 'react'

import './SocialMedia.css'

function SocialMedia({styles}) {
    return (
        <section className = {`${styles} social-media`} > 
          <i className={` ${styles} fab fa-facebook-f`}></i>
          <i className={` ${styles} fab fa-twitter`}></i>
          <i className={` ${styles} fab fa-instagram`}></i>  
        </section>
    )
}

export default SocialMedia
