import React, { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/nav.css'
import Toggle from './Toggle'





const Nav = () => {




    const [navState, setNavState] = useState(false)


    const navigate = (location) => {
        window.location.href = `#${location}`
    }

    const navToggle = () => {
        setNavState(!navState)

    }




    return (
        <>
            <nav>
                <Logo color='white' size={50} />


                <div onClick={() => navToggle()}>
                    <Toggle navState={navState} />
                </div>
                <ul>
                    <NavLink to='/product'>
                        <li>Product</li>
                    </NavLink>
                    <NavLink to='/' onClick={() => { navigate('services') }} >
                        <li>Services</li>
                    </NavLink>
                    <NavLink to='/about'>
                        <li>About</li>
                    </NavLink>
                    <Link to="/protected" className='log-in'><li>Log In</li></Link>
                </ul>




            </nav>

            <nav className={navState ? 'mobile-nav' : 'mobile-nav inactive'}>




                <ul>
                    <NavLink to='/product'>
                        <li >Product</li>
                    </NavLink>
                    <NavLink to='/' onClick={() => { navigate('services') }}>
                        <li>Services</li>
                    </NavLink>
                    <NavLink to='/about'>
                        <li>About</li>
                    </NavLink>
                    <Link to="/protected"><li>Log In</li></Link>
                </ul>




            </nav>

            <Outlet />
        </>
    )
}

export default Nav