import React from 'react'
import '../styles/nav.css'

const Toggle = ({ navState, color }) => {
    return (
        <div className='toggle' style={{
            display: 'flex',
            flexDirection: 'column',
            height: '45px',
            justifyContent: 'space-evenly',
            marginRight: '40px',
            cursor: 'pointer'
        }}>

            <span

                style={{
                    display: 'block',
                    width: `${navState ? '50px' : '50px'}`,
                    color: 'white',
                    borderBottom: `5px solid ${color}`
                }}
            ></span>
            <span

                style={{
                    display: 'block',
                    width: `${navState ? '40px' : '50px'}`,
                    color: 'white',
                    borderBottom: `5px solid ${color ? color : 'white'}`
                }}
            ></span>
            <span

                style={{
                    display: 'block',
                    width: `${navState ? '30px' : '50px'}`,
                    color: 'white',
                    borderBottom: `5px solid ${color ? color : 'white'}`
                }}
            ></span>

        </div>
    )
}

export default Toggle