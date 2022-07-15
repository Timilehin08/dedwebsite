import React, { useEffect, useState } from 'react';
import logo from '../../assets/dedukt logo.svg';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { animateScroll as scroll } from 'react-scroll';
import phoneHeader from '../../assets/Dedukt-home 2.jpg';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const url = process.env.REACT_APP_URL;
  const [signUpModal, setSignUpModal] = useState(false);
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const date = new Date().getFullYear();

  const toggleModal = (e) => {
    e.preventDefault();
    setSignUpModal(!signUpModal);
  };

  const messageOnchange = (type, text) => {
    switch (type) {
      case 'name':
        return setMessageData({ ...messageData, name: text });
      case 'email':
        return setMessageData({ ...messageData, email: text });
      case 'message':
        return setMessageData({ ...messageData, message: text });
      default:
        return messageData;
    }
  };

  const mailInfo = () => {
    return window.open(
      `mailto:support@dedukt.co?subject=Message from ${messageData.name}&body=${messageData.message}&from=${messageData.email}`
    );
  };
  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      await mailInfo();
      //await alert("Email sent")
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {/* ==========================NAVBAR STARTS================================ */}
      <div className='container'>
        <div className='col-md-12'>
          <nav className='navbar navbar-expand-lg navbar-light nav-padding'>
            <div className='container'>
              <div className='logo' to='/' onClick={toggleHome}>
                <img
                  alt='dedukt logo'
                  src={logo}
                  className='img-fluid img-responsive d-flex'
                />
              </div>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <a
                      className='nav-link mr-3'
                      href='#aboutus'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'>
                      About Us
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link mr-3'
                      href='#howworks'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'>
                      How It Works
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link mr-5'
                      href='#contactus'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'>
                      Get Support
                    </a>
                  </li>

                  <li className='nav-item sign-in'>
                    <a
                      className='nav-link btn-sign ml-5'
                      href={url + 'login'}
                      spy={'true'}
                      target='_blank'
                      rel='noreferrer'
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'>
                      Sign In
                    </a>
                  </li>
                  <li className='nav-item get-started'>
                    <a
                      className='nav-link btn-start ml-4'
                      href='/'
                      onClick={toggleModal}
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'>
                      Get Started
                    </a>
                  </li>
                  {/*<input
                    class='btn btn-text ml-5'
                    type='button'
                    href='#'
                    value='Sign In'></input>
                  <input
                    class='btn btn-started ml-5'
                    type='button'
                    href='#'
                    value='Get Started'></input>*/}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ==========================NAVBAR ENDS============================= */}

      {/* ==========================HEADER STARTS ============================= */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div
              className='col-md-5 head-padding header-msg'
              data-aos='fade-right'>
              <h1 className='big-text'>
                Automate deductions <br />
                for loans, thrifts or <br />
                savings all over Africa
              </h1>

              <p className='small-text'>
                dedukt connects traditional banks or fintechs to <br />
                employers and simplifies the process of repaying loans, or
                saving direct from income.
              </p>
              <div>
                <button
                  className='btn btn-md btn-started mt-3 p-2'
                  onClick={toggleModal}>
                  Get Started For Free
                </button>
              </div>
            </div>
            <div className='col-md-5 header-right'>
              <div className='header-r' data-aos='fade-left'>
                <img
                  src={phoneHeader}
                  alt='home logo'
                  className='img-header img-fluid img-responsive d-flex'
                />
              </div>
            </div>
          </div>
        </div>

        {/*Growing list part*/}
        <section>
          <div className='container-fluid countpad'>
            <div className='row countcol'>
              <div className='col-md-4'>
                <div className='counters text-center'>
                  <CountUp end={50} duration={3} />
                  <span>&#107;</span>+<h3>Employees</h3>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='counters text-center'>
                  <CountUp end={50} duration={3} />
                  <span>&#107;</span>+<h3>Deductions</h3>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='counters text-center'>
                  <CountUp end={82} duration={3} />+<h3>Partners</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='promotion-padding'>
            <h3 className='text-center promotion'>
              Join our growing list of satisfied partners
            </h3>

            <img
              alt='logos'
              src='https://res.cloudinary.com/dedukttt/image/upload/v1646486136/logos-1_i873wi.svg'
              className='promotion-logo text-center img-fluid img-responsive d-flex'
            />
          </div>
        </section>
      </section>
      {/* ==========================HEADER ENDS ============================= */}

      {/* ==========================ABOUT US STARTS============================= */}
      <div id='aboutus'>
        <div className='about-bg'>
          <div className='container'>
            <div className='row' data-aos='fade-up'>
              <div className='col-md-8 about-img img-fluid img-responsive d-flex'></div>

              <div className='col-md-4 py-4 justify-content-center about-rg'>
                <div className='py-4 about-text'>
                  <h1>
                    Here’s a little bit <br />
                    about us
                  </h1>
                  <h2>Thrust</h2>
                  <p className='py-2'>
                    When it comes to technology, we have the best minds but its
                    not about writing codes, its all about our drive for
                    success.
                  </p>
                </div>
                <div className='py-4 about-text'>
                  <h2>Commitment</h2>
                  <p className='py-2'>
                    Our customer first approach helps us understand your needs
                    better, you bet our solutions are just spot on!
                  </p>
                </div>
                <div className='py-4 about-text'>
                  <h2>Delivery</h2>
                  <p className='py-2'>
                    We wouldn't stop until you say so but time and accuracy is
                    essential to what we do. Let's work together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================ABOUT US ENDS ============================= */}

      {/* ==========================BUILD FOR STARTS============================= */}
      <div id='howworks'>
        <div className='build-bg'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 build-img img-fluid img-responsive d-flex'></div>

              <div className='col-md-4 py-4 justify-content-center build-rg'>
                <div className='py-4 build-text'>
                  <h1>
                    Who did we build <br />
                    dedukt for?
                  </h1>
                  <h2>Employees</h2>
                  <p className='py-2'>
                    Determine which deductions comes off your pay check, monitor
                    loan repayments and other savings and thrifts.
                  </p>
                </div>
                <div className='py-4 build-text'>
                  <h2>Employers</h2>
                  <p className='py-2'>
                    Whether you’re a Federal, State, Military or Private Sector
                    employer, dedukt helps you keep track of employee loan
                    exposure.
                  </p>
                </div>
                <div className='py-4 build-text'>
                  <h2>Banks & Fintechs</h2>
                  <p className='py-2'>
                    Connect with Employers and deliver workplace financial
                    services to your customers with simplified payroll
                    deductions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================BUILD FOR ENDS ============================= */}

      {/* ==========================ACHIEVE STARTS ============================= */}
      <div className='achieve-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 py-4 justify-content-center achieve-text achieve-rg'>
              <div className='py-4'>
                <h1>
                  Achieve 100% <br />
                  collection rate
                </h1>
                <p>
                  Avoid the tedious process of submitting monthly schedules, let
                  dedukt do the heavy lifting. We will help you process your
                  repayments and other deductions
                </p>
                <button
                  className='btn btn btn-lg btn-achieve mt-3 p-2 text-center'
                  onClick={toggleModal}>
                  Get Started For Free
                </button>
              </div>
            </div>
            <div className='col-md-8 achieve-img img-fluid img-responsive d-flex'></div>
          </div>
        </div>
      </div>

      {/*access part*/}
      <div className='access-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 access-img img-fluid img-responsive d-flex'></div>

            <div className='col-md-4 py-4 justify-content-center access-text access-rg'>
              <div className='py-4'>
                <h1>
                  Access valid payroll <br />
                  data
                </h1>
                <p>
                  Verify employment and income before approving loans, direct
                  from employers in nano seconds.
                </p>
                <button
                  className='btn btn-lg btn-started mt-3 p-2 text-center'
                  onClick={toggleModal}>
                  Get Started For Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================ACHIEVE ENDS ============================= */}

      {/* ==========================START US/HOW WORKS STARTS============================= */}
      <div className='start-padding'>
        <div className='container start-small' data-aos='fade-down'>
          <h2 className='start-big text-center'>
            Start using dedukt in 3 easy steps
          </h2>
          <div className='row'>
            <div className='col-md-4'>
              <h3>
                Join our <br />
                ecosystem
              </h3>
              {/*<div className="round">1</div>*/}
              <div class=' d-flex start-move'>
                <span className='px-2 round'>1</span>
                {/*<hr className="flex-grow-1 justify-content-center" />*/}
              </div>
              <h1>JOIN</h1>
            </div>

            <div className='col-md-4'>
              <h3>
                Connect with
                <br />
                partners
              </h3>
              <div class='text-center d-flex start-move'>
                <span className='px-2 round'>2</span>
                {/*<hr className="flex-grow-1" />*/}
              </div>

              <h1>CONNECT</h1>
            </div>

            <div className='col-md-4'>
              <h3>
                Set up <br />
                deductions
              </h3>
              <div class='text-center d-flex start-move'>
                <span className='round'>3</span>
              </div>
              <h1>DEDUCT</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================START US/HOW WORKS ENDS ============================= */}

      {/* ==========================GET SUPPORT STARTS ============================= */}
      <div id='contactus'>
        <div className='support-padding'>
          <div className='container'>
            <div className='support-text'>
              <h1 className='support-big'>
                How can we help you <br />
                today?
              </h1>
              <p className='support-small'>
                We’re all ears. Drop a message and we'll get back to <br />
                you as soon as possible
              </p>
            </div>
            <div className='support-logo img-fluid img-responsive d-flex'>
              <div className='pb-5'>
                <form
                  className='form-cont pt-5 justify-content-center'
                  data-aos='fade-up'
                  onSubmit={sendEmail}>
                  <div className='row fom-row'>
                    <div className='col-md-6 mt-4 form-text form-name'>
                      <label className='form-label'>Full Name</label>
                      <input
                        required
                        value={messageData.name}
                        onChange={(e) =>
                          messageOnchange('name', e.target.value)
                        }
                        className='form-control'
                        placeholder='John Doe'
                      />
                    </div>
                    <div className='col-md-6 mb-4 mt-4 form-text form-mail'>
                      <label className='form-label'>Email Address</label>
                      <input
                        required
                        type='email'
                        value={messageData.email}
                        onChange={(e) =>
                          messageOnchange('email', e.target.value)
                        }
                        className='form-control'
                        placeholder='xyz@gmail.com'
                      />
                    </div>

                    <div className='col-md-6 mb-5 form-text justify-content-center form-msg'>
                      <label
                        htmlFor='exampleFormControlTextarea1'
                        className='form-label'>
                        Message
                      </label>
                      <textarea
                        required
                        className='form-control'
                        value={messageData.message}
                        onChange={(e) =>
                          messageOnchange('message', e.target.value)
                        }
                        id='exampleFormControlTextarea1'
                        rows='6'
                        placeholder='Drop a message..'></textarea>
                    </div>
                  </div>
                  <div className='col-md-6 mb-3 form-text text-center'>
                    <button type='submit' class='btn btn-lg form-btn'>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================GET SUPPORT ENDS ============================= */}

      {/* ==========================FOOTER STARTS ============================= */}

      <footer className='footer-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 '>
              <div className='footer-logo'></div>
            </div>
            <div className='col-md-3'>
              <ul>
                <li style={{ padding: '8px 0px' }}>Contact</li>
                <li style={{ padding: '8px 0px' }}>
                  16 Igbasan Street, Opebi, Ikeja, Lagos,
                </li>
                <li style={{ padding: '8px 0px' }}>support@dedukt.co</li>
              </ul>
            </div>
            <div className='col-md-3'>
              <ul>
                <li style={{ padding: '8px 0px' }}>Quick Links</li>
                <li style={{ padding: '8px 0px' }}>About Us</li>
                <li style={{ padding: '8px 0px' }}>Get Support</li>
              </ul>
            </div>
            <div className='col-md-3'>
              <ul>
                <li>Follow Our Socials</li>
                <div style={{ padding: '20px 0px' }}>
                  <span style={{ padding: '20px 10px' }}>
                    {' '}
                    <img
                      alt='fb-icon'
                      src='https://res.cloudinary.com/dedukttt/image/upload/v1643895694/fb_xi7sgz.png'
                    />
                  </span>
                  <span style={{ padding: '20px 10px' }}>
                    <img
                      alt='tw-icon'
                      src='https://res.cloudinary.com/dedukttt/image/upload/v1643895621/twtt_b0d0so.png'
                    />
                  </span>
                  <span style={{ padding: '20px 10px' }}>
                    <img
                      alt='lk-icon'
                      src='https://res.cloudinary.com/dedukttt/image/upload/v1643895540/lnkd_vn1s5e.png'
                    />
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <hr />

          <div className='text-center'>
            {date} Equal Digital Nigeria Limited | All Rights Reserved
          </div>
        </div>
      </footer>

      {/* ==========================FOOTER ENDS ============================= */}
      <Modal
        size='md'
        isOpen={signUpModal}
        centered
        backdrop='static'
        keyboard={false}>
        <div className='d-flex justify-content-center text-center'>
          <ModalBody>
            <div className='font-size-24 font-weight-700'>
              Dedukt connects employers and lenders digitally
            </div>
            <div>
              <a
                href={url + 'lender'}
                target='_blank'
                rel='noreferrer'
                className='btn w-100 font-size-18 font-weight-400 mt-5'
                style={{ backgroundColor: '#FAFAFA' }}>
                <span className='active-dot'></span> I am a Lender
              </a>
            </div>
            <div>
              <a
                href={url + 'employer'}
                to='/employer'
                target='_blank'
                rel='noreferrer'
                className='btn w-100 font-size-18 font-weight-400 mt-2 mb-4'
                style={{ backgroundColor: '#FAFAFA' }}>
                <span className='active-dot'></span> I am an Employer
              </a>
            </div>
          </ModalBody>
        </div>
        <ModalFooter>
          <button className='btn btn-sign' onClick={toggleModal}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Navbar;
