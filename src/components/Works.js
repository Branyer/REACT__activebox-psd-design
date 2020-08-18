import React from 'react'
import Work from './Work'

import './Works.css'

function Works() {
    return (
        <section id="works" className="works">
            <div className="works--container">
                <Work 
                src="./images/work-1.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-2.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-3.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-4.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-5.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-6.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-7.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
                <Work 
                src="./images/work-8.jpg" 
                projectName = "Project Name" 
                description="User Interface Design"
                />
            </div>

        </section>
    )
}

export default Works
