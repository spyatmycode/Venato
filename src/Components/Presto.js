import React from 'react'
import logo from '../assets/Presto.svg'

const Presto = ({ color }) => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img className='logo' src={logo} alt='Logo' height='30px' />
            </div>

        </>
    )
}

export default Presto
