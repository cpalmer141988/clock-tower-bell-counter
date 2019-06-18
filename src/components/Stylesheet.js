import React from 'react'
import '../css/myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className='primary'>Stylesheets</h2>
            <h2 className={className}>Stylesheets</h2>
            <h2 className={`${className} font-xl`}>Stylesheets</h2>
        </div>
    )
}

export default Stylesheet

