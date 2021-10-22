import React from 'react'
import logo from '../logo.svg'

function About() {
    return (
        <div>
            <img src={logo} alt="pic" className="profile" />
            <h1 className='text-primary mb-3'>Charles Kasasira</h1>
            <p>Software engineer aiming to design and develop experiences that make people's lives better</p>
        </div>
    )
}

export default About
