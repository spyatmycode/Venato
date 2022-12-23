import React from 'react'
import { FaCheckCircle, FaFeather, FaEye, FaSun } from 'react-icons/fa'
import Man from '../assets/man.svg'
import Woman from '../assets/woman.svg'



import '../styles/home.css'


const ServicesTwo = () => {
  return (
    <section className='services-two'>

      <div className='man'>
        <img src={Man} alt="man" width='300px' />

        <div>
          <h4>
            We connect our customers with the best, and help them keep up-and stay open.
          </h4>

          <ul>
            <li><FaCheckCircle size={20} color='#0A2640' />We connect our customers with the best.</li>
            <li><FaCheckCircle size={20} color='#0A2640' />Advisor success customer launch party.</li>
            <li><FaCheckCircle size={20} color='#0A2640' />Business to consumer long tail.</li>
          </ul>

          <button>Start now</button>
        </div>


      </div>



      {/* This is the Woman page now */}

      <div className='woman'>


        <div>
          <h4>
            We connect our customers with the best, and help them keep up-and stay open.
          </h4>

          <ul>
            <li style={{ backgroundColor: '#0A2640', color: 'white' }}><FaFeather size={20} color='white' />We connect our customers with the best.</li>
            <li><FaEye size={20} color='#0A2640' />Advisor success customer launch party.</li>
            <li><FaSun size={20} color='#0A2640' />Business to consumer long tail.</li>
          </ul>


        </div>
        <img src={Woman} alt="man" width='300px' />

      </div>

    </section>
  )
}

export default ServicesTwo