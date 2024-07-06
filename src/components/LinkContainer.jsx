import React from 'react'

const LinkContainer = ({ label, icon }) => {
    return (
        <div className="link-container">
            <span className='link-icon'>{icon}</span>
            <span className='link-label'>{label}</span>
        </div>
    )
}

export default LinkContainer
