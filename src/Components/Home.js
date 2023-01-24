import '../styles/home.css'
import React from 'react'
import hero from '../assets/hero graphics.svg'
import Logo from './Logo'
import Presto from './Presto'
import Services from './Services'





const Home = () => {
    return (

        <>

            <section className='home'>
                <div className="circle"></div>

                <div className='first'>
                    <div className='left'>
                        <article>
                            <p style={{ fontSize: '50px', color: 'white', fontWeight: '400' }}>
                                Tracking your money made easy and simple
                            </p>
                            <p>
                                All your payments managed in one place.
                            </p>
                        </article>

                        <div className="home-btn">
                            <button>
                                Sign Up
                            </button>

                            <button>
                                Explore
                            </button>
                        </div>

                    </div>

                    <div>
                        <img src={hero} alt="hero" height='423px' />

                    </div>
                </div>

                <section className="sponsors">
                    <Presto color='white' />
                    <Logo color='white' />
                    <Presto color='white' />
                    <Logo color='white' />


                </section>
            </section>

            <Services />



        </>
    )
}

export default Home
