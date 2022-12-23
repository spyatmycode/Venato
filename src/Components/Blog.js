import React from 'react';
import Image from '../assets/Rectangle 1270g.svg'
import { FaChevronCircleDown } from 'react-icons/fa'
import '../styles/blog.css'
const Blog = () => {

    return (
        <section className='blog'>

            <div className='main'>
                <img src={Image} alt="img" />

                <span>
                    {/* width: 500px */}
                    <p>
                        We connect our customers with the best, and help them keep up-and stay open

                    </p>

                    <ul>
                        <li>We connect our customers with the best?<FaChevronCircleDown size={20} fill='#0A2640' /></li>
                        <li>Android research & development rockstar? <FaChevronCircleDown size={20} fill='#0A2640' /></li>
                    </ul>
                </span>
            </div>

        </section>

    )
}

export default Blog