import React from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Test1 from '../assets/Testimonial1.svg'
import Test2 from '../assets/Testimonial2.svg'
import Test3 from '../assets/Testimonial3.svg'
import '../styles/home.css'
const Reviews = () => {
    return (
        <section className='reviews'>


            <div>
                <p>
                    An enterprise template to ramp up your company website
                </p>

                <span>
                    <FaArrowCircleLeft size={60} fill='white' color='#0A2640' />
                    <FaArrowCircleRight size={60} fill='white' color='#0A2640' />

                </span>
            </div>

            <div className='testimonials'>
                <img src={Test1} alt="1" />
                <img src={Test2} alt="2" />
                <img src={Test3} alt="3" />

            </div>



        </section>
    )
}

export default Reviews
