import React from 'react'
import '../styles/blog-route.css'
import mainImg from '../assets/blog1.svg'
import Bing from '../assets/bing.svg'
import Article from './Article'
const BlogRoute

    = () => {
        return (
            <>

                <div className="blog-1">
                    <div className='blog-1-one'>
                        <p style={{ color: '#777' }}>
                            Blog

                        </p>
                        <p>
                            Thoughts and words
                        </p>

                    </div>
                    <div className='blog-1-two'>
                        <img src={mainImg} alt="" />
                        <div>
                            <span style={{
                                display: 'flex', margin: '60px', alignItems: 'center',


                            }}>
                                <h6>Category</h6> <p style={{ fontSize: '10px', color: '#777', marginLeft: '20px ' }}>November 22, 2021</p>

                            </span>
                            <p className='blog-1-two-p'>Pitch termsheet backing validation focus release.</p>
                            <div style={{ display: 'flex', margin: '60px', alignItems: 'center', }}><img src={Bing} alt="" style={{ width: "32px" }} />  <h6 style={{ marginLeft: '20px ' }}>Chandler Bing</h6></div>

                        </div>
                    </div>

                    <hr className='hr' />
                </div>

                <div className='articles'>
                    <div className='latest'>
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>

                    <button>Load More</button>

                </div>








            </>
        )
    }

export default BlogRoute
//550 x 386

