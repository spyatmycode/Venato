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
                            <p style={{ fontSize: '48px', color: 'white', fontWeight: '400' }}>
                                Save time by building  fast with Boldo Template
                            </p>
                            <p>
                                Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                            </p>
                        </article>

                        <div className="home-btn">
                            <button>
                                Buy template
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
