import React from 'react'
import '../styles/ourblog.css'

const CallToAction = () => {
    return (
        <section className='call-to-action'>
            <div>
                <p>
                    An enterprise template to ramp up your company website

                </p>

                <form>
                    <input type="text" defaultValue='Your email address' />
                    <button type="submit" style={{
                        textAlign: 'center',
                        backgroundColor: '#65E4A3',
                        fontWeight: 'bold',
                        color: '#0A2640',
                        padding: '10px 30px'
                    }}>
                        START NOW
                    </button>
                </form>



            </div>



        </section>
    )
}

export default CallToAction
