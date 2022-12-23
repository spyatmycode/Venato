import React from 'react'
import logo from '../assets/Boldo.svg'

const Logo = ({ color, size }) => {

    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'baseline' }}>


            <img className='logo' src={logo} alt='Logo' height={size ? `${size}px` : '30px'} />


            <h1 style={{ fontSize: `${size ? `${size}px` : '30px'}`, marginLeft: '10px', color: `${color}` }}>
                Boldo
            </h1>

        </div>


    )
}

export default Logo
