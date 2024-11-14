import React from 'react';
import './main.css';

function Main() {
    const mainBg = {
        background: 'url("./images/index-bg.jpg") center no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        opacity: '.07',
        position: 'fixed',
        left: 0,
        top: 0,
    }
    return (
        <section className='main'>
            <div className='main_text'>
                <h1><img src="./images/logo.png" alt="wandavision logo" /></h1>
                <p>&copy; 2024 MARVEL</p>
                <div style={mainBg}></div>
            </div>
        </section>
    )
}

export default Main