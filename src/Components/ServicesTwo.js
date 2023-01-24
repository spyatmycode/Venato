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
            Track all your finances with ease
          </h4>

          <ul>
            <li><FaCheckCircle size={20} color='#0A2640' />Budgeting that works.</li>
            <li><FaCheckCircle size={20} color='#0A2640' />Sync all yout budgets.</li>
            <li><FaCheckCircle size={20} color='#0A2640' />Plan for huge expenses.</li>
          </ul>

          <button onClick={() => window.location.href = `#call-to-action`}>Start now</button>
        </div>


      </div>



      {/* This is the Woman page now */}

      <div className='woman'>


        <div>
          <h4>
            Manage all accounts in one place.
          </h4>

          <ul>
            <li style={{ backgroundColor: '#0A2640', color: 'white' }}><FaFeather size={20} color='white' />We connect our customers with the best.</li>
            <li><FaEye size={20} color='#0A2640' />Add transactions with a simple tap.</li>
            <li><FaSun size={20} color='#0A2640' />Track your income and expenses.</li>
          </ul>


        </div>
        <img src={Woman} alt="man" width='300px' />

      </div>

    </section>
  )
}

export default ServicesTwo