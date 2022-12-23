import React from 'react'
import '../styles/ourblog.css'
import Image from '../assets/Rectangle 1270-1.svg'

const OurBlog = () => {
    return (
        <section className='ourblog'>

            <h6>
                Our Blog

            </h6>

            <p className='main-p'>
                Value proposition accelerator product management venture

            </p>

            <div>
                <article>
                    <img src={Image} alt="" />
                    <span>
                        <h6>Category</h6>
                        <p>
                            November 22, 2021
                        </p>

                    </span>

                    <p>
                        Pitch termsheet backing validation focus release.
                    </p>


                </article>
                <article>
                    <img src={Image} alt="" />
                    <span>
                        <h6>Category</h6>
                        <p>
                            November 22, 2021
                        </p>

                    </span>

                    <p>
                        Pitch termsheet backing validation focus release.
                    </p>


                </article>

                <article>
                    <img src={Image} alt="" />
                    <span>
                        <h6>Category</h6>
                        <p>
                            November 22, 2021
                        </p>

                    </span>

                    <p>
                        Pitch termsheet backing validation focus release.
                    </p>


                </article>
            </div>

            <button>Load More</button>


        </section>
    )
}

export default OurBlog
