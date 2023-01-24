import React from 'react'
import '../styles/ourblog.css'

const CallToAction = () => {
    return (
        <section className='call-to-action' id='call-to-action'>
            <div>
                <p>
                    Improve the way you manage your finances today !

                </p>

                <form>
                    <input type="text" defaultValue='Your email address' />
                    <button type="submit" style={{
                        textAlign: 'center',
                        backgroundColor: '#65E4A3',
                        fontWeight: 'bold',
                        color: '#0A2640',
                        padding: '15px 30px',
                        fontSize: '9px'
                    }}>
                        START NOW
                    </button>
                </form>



            </div>



        </section>
    )
}

export default CallToAction
