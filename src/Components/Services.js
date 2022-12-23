import React from 'react'
import first from '../assets/Rectangle 1270.svg'
import second from '../assets/Rectangle 1270-1.svg'
import third from '../assets/Rectangle 1270-2.svg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import ServicesTwo from './ServicesTwo'
import Reviews from './Reviews'
import OurBlog from './OurBlog'
import Blog from './Blog'
import CallToAction from './CallToAction'
import Footer from './Footer'


const Services = () => {
    return (
        <>

            <section className='services' id='services'>
                <article style={{

                }}>
                    {/* width: 842px */}
                    <h6>
                        Our Services

                        {/* font-size: 20px */}

                    </h6>
                    <p>
                        Handshake infographic mass market crowdfunding iteration.
                        {/* font-size: 48px */}

                    </p>
                </article>

                <div className='modal'>
                    <div>
                        <img src={first} alt="first" width='300px'
                            height='354px' />
                        <h4>
                            Cool feature title
                        </h4>
                        <p>
                            Learning curve network effects return on investment.
                        </p>
                        {/* e=>window.location.href="#id" */}
                        <Link>Explore page <FaArrowRight size={10} /></Link>
                    </div>
                    <div>
                        <img src={second} alt="second" width='300px'
                            height='354px' />
                        <h4>
                            Cool feature title
                        </h4>
                        <p>
                            Learning curve network effects return on investment.
                        </p>
                        <Link>Explore page <FaArrowRight size={10} /></Link>
                    </div>
                    <div>
                        <img src={third} alt="third" width='300px'
                            height='354px' />
                        <h4>
                            Cool feature title
                        </h4>
                        <p>
                            Learning curve network effects return on investment.
                        </p>
                        <Link>Explore page <FaArrowRight size={10} /></Link>
                    </div>



                </div>





            </section>

            <ServicesTwo />
            <Reviews />
            <Blog />
            <OurBlog />
            <CallToAction />
            <Footer />
        </>
    )
}

export default Services



