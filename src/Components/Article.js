import React from 'react'
import Image from '../assets/Rectangle 1270-1.svg'
import '../styles/article.css'
import Bing from '../assets/bing.svg'

const Article = () => {
    return (
        <article>
            <img src={Image} alt="" />
            <span>
                <h6>Category</h6>
                <p style={{ color: '#777' }}>
                    November 22, 2021
                </p>

            </span>

            <p>
                Pitch termsheet backing validation focus release.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0px', justifyContent: 'flex-start' }}>
                <img src={Bing} alt="" width={'32px'} />
                <h6 style={{ fontWeight: '300', fontSize: '12px', marginLeft: '10px' }}>Akeju Oluwanifemi</h6>
            </div>


        </article>
    )
}

export default Article