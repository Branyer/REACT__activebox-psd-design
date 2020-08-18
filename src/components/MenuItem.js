import React from 'react'

function MenuItem( { href, text }) {
    return (
            <li className ="menu__item">
                <a className="item__link" href={href}>{text}</a>
            </li>
    )
}
 
export default MenuItem
