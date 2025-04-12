import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    function handleClick(){
        navigate('/dashboard')
    }
    return (
        <div>
            About Page 
            <button onClick={handleClick}>Move to Dashboard page</button>
        </div>
    )
}

export default About
