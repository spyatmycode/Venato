import React from 'react'
import '../styles/about.css'
import Img from '../assets/scott.svg'
import GM from '../assets/GM.svg'


const About = () => {
    return (
        <>
            <div className='about'>

                <div className='second'>
                    <p style={{
                        fontSize: '20px',
                        marginBottom: '20px',
                        fontWeight: '100'
                    }}>
                        About
                    </p>
                    <p className='main-text' style={{ fontSize: '30px', fontWeight: '500' }}>
                        We love to make great things, things that matter.
                    </p>
                </div>

                <div className='second '>
                    <p style={{ fontSize: '15px', }}>
                        Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                    </p>
                </div>

            </div>

            <div className="two">
                <h6 style={{ fontWeight: '300' }}>Our members</h6>
                <p>Be in charge of your expenses</p>
                <div>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3>24 hours</h3>
                        <p style={{ fontSize: '15px' }}>a day</p>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3>7 days</h3>
                        <p style={{ fontSize: '15px' }}>a week</p>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3>365 days</h3>
                        <p style={{ fontSize: '15px' }}>a year</p>
                    </span>
                </div>
            </div>

            <div className="three">
                <p style={{ fontSize: '20px' }}>Our story</p>
                <p style={{ fontSize: '48px', lineHeight: '72px' }}>Handshake infographic mass market crowdfunding iteration.</p>
                <p style={{ fontSize: '20px', lineHeight: '32px' }}>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
            </div>

            {/* <div className="four">
                <div className="first">
                    <p>Our team</p>
                    <p>The people behind the work</p>
                    <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                </div>

                <div className='second'>
                    <span>
                        <img src={Img} alt="" width='250px' style={{ marginBottom: '20px' }} />
                        <p>Michael Scott</p>
                        <p>General Manager</p>
                    </span>
                    <span>
                        <img src={Img} alt="" width='250px' style={{ marginBottom: '20px' }} />
                        <p>Michael Scott</p>
                        <p>General Manager</p>
                    </span>
                    <span>
                        <img src={Img} alt="" width='250px' style={{ marginBottom: '20px' }} />
                        <p>Michael Scott</p>
                        <p>General Manager</p>
                    </span>


                </div>
            </div>
 */}
            {/* <div className="five">
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>

            </div> */}

            <div className="six">
                <div className="six-first">
                    <p>Our Blog</p>
                    <p>Value proposition accelerator product management venture</p>
                    <hr className='hr' />

                </div>



                <div className="six-second">
                    <span>
                        <p>We are <span>commited</span></p>
                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>

                    </span>
                    <span>
                        <p>We are <span>responsible</span></p>
                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>

                    </span>
                    <span>
                        <p>We aim for <span>progress</span></p>
                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>

                    </span>


                </div>
            </div>


        </>
    )
}

export default About
