import React from 'react'
import first from '../assets/Rectangle 1270.svg'
import second from '../assets/Rectangle 1270-1.svg'
import third from '../assets/Rectangle 1270-2.svg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import ServicesTwo from './ServicesTwo'
/* import Reviews from './Reviews'
import OurBlog from './OurBlog'
import Blog from './Blog' */


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
                        All finances managed in one place
                        {/* font-size: 48px */}

                    </p>
                </article>

                <div className='modal'>
                    <div>
                        <img src={first} alt="first" width='300px'
                            height='354px' />
                        <h4>
                            Track your finances while on the go.
                        </h4>
                        <p>
                            Never worry about your expenses.
                        </p>
                        {/* e=>window.location.href="#id" */}
                        <Link>Learn more <FaArrowRight size={10} /></Link>
                    </div>
                    <div>
                        <img src={second} alt="second" width='300px'
                            height='354px' />
                        <h4>
                            Track your finances at work.
                        </h4>
                        <p>
                            Manage your money even at those boring meetings.
                        </p>
                        <Link>Learn more <FaArrowRight size={10} /></Link>
                    </div>
                    <div>
                        <img src={third} alt="third" width='300px'
                            height='354px' />
                        <h4>
                            Track your finances at your leisure.
                        </h4>
                        <p>
                            Be in charge of your funds when you can.
                        </p>
                        <Link>Learn more <FaArrowRight size={10} /></Link>
                    </div>



                </div>





            </section>

            <ServicesTwo />
            {/* <Reviews /> */}
            {/* <Blog /> */}
            {/* <OurBlog /> */}

        </>
    )
}

export default Services



