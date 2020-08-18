import React from 'react'

import Worker from './Worker'

import './Team.css'

function Team() {
    return (
        <section id="our-team" className="team">
            <div className="team--container">
                <Worker 
                src="./images/team-1.jpg"
                name= "Ruth Woods"
                charge = "Founder CEO"
                p = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
                /> 
                <Worker 
                src="./images/team-2.jpg"
                name= "Timothy Reed"
                charge = "Co-Founder Developer"
                p = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
                /> 
                <Worker 
                src="./images/team-3.jpg"
                name= "Victoria Valdez"
                charge = "UI DESIGNER"
                p = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
                /> 
                <Worker 
                src="./images/team-4.jpg"
                name= "Beverly Little"
                charge = "DATA SCIENTISt"
                p = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
                /> 
            </div>

        </section>
    )
}

export default Team
