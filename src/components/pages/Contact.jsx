import React from 'react';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate()
    const linkInstagram = () => {
        navigate('www.instagram.com')
    } 
    return (
        <div className='contact'>
            <h1>Contact us</h1>
            <p>Contact us via  the following:</p>
            <div className="all">
            <img src={instagram} onClick={linkInstagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            </div>
        </div>
    );
}

export default Contact;
