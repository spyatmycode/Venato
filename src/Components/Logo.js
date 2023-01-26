import React from 'react'
import logo from '../assets/Boldo.svg'
import blueLogo from '../assets/Blue-logo.svg'

const Logo = ({ color, size, location }) => {

    return (

        <div style={{ display: 'flex', alignContent: 'flex-start' }}>


            {/* <img className='logo' src={location === '/' ? logo : blueLogo} alt='Logo' height={size ? `${size}px` : '30px'} /> */}


            <h1 style={{ fontSize: `${size ? `${size}px` : '30px'}`, marginLeft: '100px', color: `${location === '/' ? 'white' : color}` }}>
                VENATO
            </h1>

        </div>


    )
}

export default Logo
