import React from 'react';
import '../Styles/Contact.css'

const contact = () => {

    return (
        <div className='contact-container'>
            <div className='txt-contact'>
                <h1 className='h1-contact'>contact</h1>
                <div className='line'></div>
                <div className='name-number-container'>
                    <h2 className='name'>Baptiste Harbuz</h2>
                    <h2 className='number'>06 18 12 53 30</h2>
                </div>
                <div className='mail-container' onClick={() => window.location.href = "mailto:baptiste.harbuz@yahoo.com"}>
                    <h3 className='mail'>baptiste.harbuz@yahoo.com</h3>
                </div>
                <a className='linkedin-container' href="https://www.linkedin.com/in/baptiste-harbuz/" target="_blank" rel="noopener noreferrer">
                    <h3 className='linkedin'>LinkedIn</h3>
                </a>
                <a className='github-container' href="https://github.com/baptisteharbuz" target="_blank" rel="noopener noreferrer">
                    <h3 className='github'>GitHub</h3>
                    <h6 className='contact-click'>Click !</h6>
                </a>
            </div>
        </div>
    )
}

export default contact;