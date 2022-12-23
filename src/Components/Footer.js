import React from 'react'
import '../styles/ourblog.css'
import Logo from '../Components/Logo'

const Footer = () => {
    return (
        <section className='footer'>
            <div>
                <ul>
                    <Logo size={20} />
                    <li>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</li>
                    <li>All rights reserved</li>
                </ul>


                <ul>
                    <li>Landing</li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Services</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>Home</li>
                    <li>Career</li>
                    <li>Services</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Product</li>
                    <li>Services</li>
                </ul>
            </div>

        </section>
    )
}

export default Footer