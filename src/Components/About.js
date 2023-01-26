import React from 'react';
import '../styles/about.css';
import Img from '../assets/scott.svg';
import GM from '../assets/GM.svg';

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='second'>
          {/* <p
            style={{
              fontSize: '30px',
              marginBottom: '20px',
              fontWeight: '100',
            }}
          >
            About
          </p> */}
          <p
            className='main-text mainPara'
            style={{ fontSize: '45px', fontWeight: '500' }}
          >
            # We love to keep <br /> your money inflow <br /> and outflow.
          </p>
        </div>

        <div className='second mainPara '>
          <ul style={{ fontSize: '25px' }}>
            <li>• Priortize Your Spending</li>
            <br />
            <li>• Become Aware Of Poor Spending Habits</li>
            <br />
            <li>• Take Control Of Your Finances</li>
            <br />
            <li>• Saving And Investment</li>
          </ul>
        </div>
      </div>

      <div className='two'>
        <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Our Clients</h3>
        <p>Be in charge of your expenses</p>
        <div>
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>24 hours</h3>
            <p style={{ fontSize: '15px' }}>a day</p>
          </span>
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>7 days</h3>
            <p style={{ fontSize: '15px' }}>a week</p>
          </span>
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>365 days</h3>
            <p style={{ fontSize: '15px' }}>a year</p>
          </span>
        </div>
      </div>

      {/* <div className="three">
                <p style={{ fontSize: '20px' }}>Our story</p>
                <p style={{ fontSize: '48px', lineHeight: '72px' }}>Handshake infographic mass market crowdfunding iteration.</p>
                <p style={{ fontSize: '20px', lineHeight: '32px' }}>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
            </div> */}

      {/* <div className="four">
                <div className="first">
                    <p>Our team</p>
                    <p>The people behind the work</p>
                    <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                </div>

                <div className='second'>
                    <span>
                        <img src={Img} alt="" width='250px' style={{ marginBottom: '20px' }} />
                        <p>Michael Scott</p>
                        <p>General Manager</p>
                    </span>
                    <span>
                        <img src={Img} alt="" width='250px' style={{ marginBottom: '20px' }} />
                        <p>Michael Scott</p>
                        <p>General Manager</p>
                    </span>
                    <span>
                        <img src={Img} alt="" width='250px' style={{ marginBottom: '20px' }} />
                        <p>Michael Scott</p>
                        <p>General Manager</p>
                    </span>


                </div>
            </div>
 */}
      {/* <div className="five">
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>
                <span>
                    <img src={GM} alt="" width={'120px'} />
                    <div>
                        <p>Akeju Oluwanifemi</p>
                        <p>General Manager</p>
                    </div>
                </span>

            </div> */}

      <div className='six'>
        <div className='six-first'>
          <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>
            Expense Manager
          </h1>
          <p>You Are Your Manager</p>
          <hr className='hr' />
        </div>

        <div className='six-second'>
          <span>
            <p>
              We are <span>commited</span>
            </p>
            <p style={{ marginLeft: '50px' }}>
              We Are Commited To Tracking Your Expenses And To Improve Your
              Finances.{' '}
            </p>
          </span>
          <span>
            <p>
              We are <span>responsible</span>
            </p>
            <p>
              We are responsible for Creating A Realistic And Monthly Budget
              While Helping You Build Your Savings .{' '}
            </p>
          </span>
          <span>
            <p>
              We aim for <span>progress</span>
            </p>
            <p style={{ marginLeft: '60px' }}>
              By Helping You Cut Back Recurring Charges, Saving Up Cash, Paying
              Your Bills Every Month And Beginning An Investment Strategy.{' '}
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
