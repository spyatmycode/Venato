import React, { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/nav.css'
import Toggle from './Toggle'
import CallToAction from './CallToAction'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'





const Nav = () => {



    const [navState, setNavState] = useState(false)


    const navigate = (location) => {
        window.location.href = `#${location}`
    }

    const navToggle = () => {
        setNavState(!navState)

    }



    let location = useLocation().pathname




    function getColor(params) {



        if (params === 'nav') {
            if (location === '/about') {
                return '#65E4A3'
            }
            if (location === '/') {
                return '#0A2640'
            }
            if (location === '/blog') {
                return 'white'
            }


        }
        if (params === 'login') {
            if (location === '/') {
                return 'white'
            }
            if (location === '/about') {
                return '#65E4A3'
            }
            if (location === '/blog') {
                return 'white'
            }


        }

        if (params === 'login-border') {
            if (location === '/') {
                return 'none'
            }
            if (location === '/about') {
                return '#0A2640'
            }
            if (location === '/blog') {
                return '#0A2640'
            }


        }

        if (params === 'a-tag') {
            if (location === '/') {
                return 'white'
            }
            if (location === '/about') {
                return '#0A2640'
            }
            if (location === '/blog') {
                return '#0A2640'
            }


        }

        if (params === 'logo') {
            if (location === '/') {
                return 'white'
            }
            if (location === '/about' || location === '/blog') {
                return '#0A2640'
            }


        }

    }












    return (
        <>
            <nav style={{ backgroundColor: getColor('nav') }}>
                <Logo size={50} color={getColor('logo')} location={location} />


                <div onClick={() => navToggle()}>
                    <Toggle navState={navState} color={getColor('logo')} />
                </div>
                <ul>
                    <NavLink to='/blog' style={{ color: getColor('a-tag') }}>
                        <li>Product</li>
                    </NavLink>
                    <NavLink to='/' onClick={() => { navigate('services') }} style={{ color: getColor('a-tag') }}>
                        <li>Services</li>
                    </NavLink>
                    <NavLink to='/about' style={{ color: getColor('a-tag') }}>
                        <li>About</li>
                    </NavLink>
                    <Link to="/protected" className='log-in' style={{ backgroundColor: getColor('login'), border: `2px solid ${getColor('login-border')}` }}><li>Log In</li></Link>
                </ul>




            </nav>

            <nav className={navState ? 'mobile-nav' : 'mobile-nav inactive'}>




                <ul>
                    <NavLink to='/blog'>
                        <li >Product</li>
                    </NavLink>
                    <NavLink to='/' onClick={() => { navigate('services') }}>
                        <li>Services</li>
                    </NavLink>
                    <NavLink to='/about'>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/blog'>
                        <li>Blog</li>
                    </NavLink>
                    <Link to="/protected"><li>Log In</li></Link>
                </ul>




            </nav>

            <Outlet />

            <CallToAction />
            <Footer />


        </>
    )
}

export default Nav