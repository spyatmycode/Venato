import React from 'react'
import FooterStyle from '../styles/footer.module.css'
import Logo from '../Components/Logo'
import { Link } from 'react-router-dom'

const Footer = () => {

    const navigate = (location) => {
        window.location.href = `#${location}`
    }

    return (
        <section className={FooterStyle.footer}>
            <div className={FooterStyle.footerone}>
                <ul>
                    <li> <Logo size={20} /></li>
                    <li>
                        Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
                    </li>

                </ul>


                <ul>
                    <li className={FooterStyle.head}>Landing</li>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about'}><li><li>Products</li></li></Link>
                    <Link to={'/'} onClick={() => navigate('services')}><li><li>Services</li></li></Link>




                </ul>
                <ul>
                    <li className={FooterStyle.head}>Company</li>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center' }}> Career <div className='hiring'>Hiring !</div></li></Link>

                    <Link to={'/'} onClick={() => navigate('services')}><li>Services</li></Link>



                </ul>
                <ul>
                    <li className={FooterStyle.head}>Resources</li>
                    <Link to='/blog'><li>Blog</li></Link>
                    <Link to='/about'><li>Product</li></Link>
                    <Link to='/' onClick={() => navigate('services')}><li>Services</li></Link>

                </ul>
            </div>

        </section>
    )
}

export default Footer