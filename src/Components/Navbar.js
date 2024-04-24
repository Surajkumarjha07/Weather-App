import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return(
        <>
        <section className='section'>
            <ul className='ul'>
                <li className='list'>Home</li>
                <li className='list'>Features</li>
                <li className='list'>About</li>
                <li className='list'>Geolocation</li>
                <li> <input type='text' placeholder='Enter your location' id='input' onChange={props.input}></input> </li>
            </ul>

        </section>
        </>
    )
}

export default Navbar;