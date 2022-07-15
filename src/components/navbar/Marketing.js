import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../../assets/dedukt logo.svg';
import header from "../../assets/header.svg";
import logos from "../../assets/logos.svg";
import about from '../../assets/aboutt.png';
import check from '../../assets/check.svg';
import { animateScroll as scroll } from 'react-scroll';
import CountUp from 'react-countup';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
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
  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          {/* ==========================NAVBAR STARTS================================*/}
          <div className='w-screen h-[80px] z-10 drop-shadow-sm mx-auto px-4 sm:px-6 xl:px-8 lg:px-0'>
            <div className='flex items-center justify-between h-full w-full'>
              <Link className='flex-shrink-0' to='/'>
                <img
                  className='block h-full w-full px-12 lg:px-12 sm:px-0'
                  src={logo}
                  alt='dedukt'
                />
              </Link>
              <div className='flex items-center'>
                <div className='hidden xl:ml-24 lg:ml-0 sm:block md:flex md:justify-between sm:ml-6'>
                  <div className='flex space-x-4'>
                    <a
                      href='#aboutus'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='text-dedukt-blue lg:px-1 px-3 py-2 md:px-1 
											rounded-md text-lg font-normal font-CircularStd-Book'>
                      About us
                    </a>
                    <a
                      href='#howworks'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='text-dedukt-blue lg:px-1 px-3 py-2 md:px-1 rounded-md text-lg 
											font-normal font-CircularStd-Book'>
                      How It works
                    </a>
                    <a
                      href='#support'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='text-dedukt-blue lg:px-1 px-3 py-2 md:px-1 rounded-md
											 text-lg font-normal font-CircularStd-Book'>
                      Get Support
                    </a>
                  </div>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex items-center'>
                  <a
                    href={url + 'login'}
                    spy={'true'}
                    target='_blank'
                    rel='noreferrer'
                    smooth={'true'}
                    offset={-70}
                    duration={500}
                    exact='true'
                    className='inline-flex mr-6 items-center px-4 py-2 border 
										border-transparent text-lg font-normal rounded-md
										font-CircularStd-Book text-dedukt-blue'>
                    Sign In
                  </a>
                  <a
                    href='/'
                    onClick={toggleModal}
                    spy={'true'}
                    smooth={'true'}
                    offset={-70}
                    duration={500}
                    exact='true'
                    className=' inline-flex mr-16 items-center px-4 py-2 border 
										bg-gradient-to-r from-dedukt-bl to-dedukt-br text-lg font-normal rounded 
										font-CircularStd-Book text-white'>
                    Get Started
                  </a>
                </div>
              </div>
              <div className='-mr-2 flex md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center mr-5 justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='/aboutus'
                className=' text-dedukt-blue block px-3 py-2 rounded-md text-base font-normal font-CircularStd-Book'>
                About us
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/howworks'
                className='text-dedukt-blue block px-3 py-2 rounded-md text-base font-normal font-CircularStd-Book'>
                How It works
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/support'
                className='text-dedukt-blue block px-3 py-2 rounded-md text-base font-normal font-CircularStd-Book'>
                Get Support
              </Disclosure.Button>
            </div>
            <div>
              <div className='pt-2 pb-3'>
                <div className='px-5'>
                  <a
                    href={url + 'login'}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex mr-6 items-center px-3 py-2 border border-transparent
										 text-base font-normal rounded font-CircularStd-Book text-dedukt-blue'>
                    Sign In
                  </a>
                  <div className=''>
                    <a
                      href='/'
                      onClick={toggleModal}
                      type='button'
                      className=' inline-flex items-center pb-2 px-3 py-2 border bg-gradient-to-r from-dedukt-bl to-dedukt-br text-base font-normal rounded 
											font-CircularStd-Book text-white'>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
          {/* ==========================NAVBAR ENDS================================*/}

          {/* ==========================HEADER STARTS ============================= */}
          <main class='lg:relative lg:my-10 md:my-10'>
            <div
              class='mx-auto max-w-7xl w-full pt-10 pb-10 text-center lg:py-24 lg:text-left px-8 overflow-hidden'
              data-aos='fade-up-down'>
              <div class='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
                <h1 class='text-6xl font-CamptonBold text-dedukt-blue sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
                  Get your employees loans at a competitive rate on dedukt
                </h1>
                <p class='mt-3 max-w-md mx-auto text-base font-CamptonLight text-black sm:text-xl md:mt-5 md:max-w-3xl text-justify'>
                  Help your employees access instant loans with convenient
                  repayment from accredited lenders on dedukt. Boost your
                  employees’ moral.
                </p>
                <div class='mt-10 sm:flex sm:justify-center lg:justify-start'>
                  <div class='rounded-md'>
                    <a
                      href='/'
                      onClick={toggleModal}
                      class='w-full flex items-center justify-center px-8 py-3 border
									 text-lg text-white font-normal bg-gradient-to-r from-dedukt-bl to-dedukt-br rounded md:py-4 md:text-lg lg:text-xs'>
                      Get started for free
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class='relative w-full h-64 sm:h-72 md:h-96 
				lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'
              data-aos='fade-down-right'>
              <img
                class='absolute inset-0 w-11/12 h-full'
                src={header}
                alt='header'
              />
            </div>
          </main>
          {/* ==========================HEADER ENDS ============================= */}

          {/* ==========================VIDEO STARTS ============================= */}
          <div id='aboutus'>
            <div
              class='aspect-w-16 aspect-h-9 relative items-center py-64 my-48'
              data-aos='fade-up-down'>
              <iframe
                src='https://player.vimeo.com/video/708503443?h=44083fd041&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                frameborder='0'
                allow='autoplay; fullscreen; picture-in-picture'
                allowfullscreen
                title='dedukt video.mp4'
                class='absolute w-full h-full inset-0'></iframe>
            </div>
            {/* ==========================VIDEO ENDS ============================= */}

            {/* ==========================COUNTER STARTS ============================= */}
            <div class='pl-12 pr-12 rounded'>
              <div
                class='bg-gradient-to-r from-dedukt-bl to-dedukt-br'
                data-aos='flip-up'>
                <div class='max-w-2xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20'>
                  <dl class='mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8'>
                    <div class='flex flex-col lg:w-0 lg:flex-1 text-center'>
                      <dt class='order-1 mt-2 mb-2 text-5xl leading-6 font-medium font-CircularStd-Medium text-white'>
                        <CountUp end={50} duration={5} />
                        <span>&#107;</span>+
                      </dt>
                      <dd class='order-2 text-lg font-normal text-white font-CircularStd-Book'>
                        Employees
                      </dd>
                    </div>
                    <div class='flex flex-col mt-10 sm:mt-0 lg:w-0 lg:flex-1 text-center'>
                      <dt class='order-1 mt-2 mb-2 text-5xl leading-6 font-medium font-CircularStd-Medium text-white'>
                        <CountUp end={50} duration={5} />
                        <span>&#107;</span>+
                      </dt>
                      <dd class='order-2 text-lg font-normal text-white font-CircularStd-Book'>
                        Transactions
                      </dd>
                    </div>
                    <div class='flex flex-col mt-10 sm:mt-0 lg:w-0 lg:flex-1 text-center'>
                      <dt class='order-1 mt-2 mb-2 text-5xl leading-6 font-medium font-CircularStd-Medium text-white'>
                        <CountUp end={82} duration={5} />+
                      </dt>
                      <dd class='order-2 text-lg font-normal text-white font-CircularStd-Book'>
                        Partners
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          {/* ==========================COUNTER ENDS ============================= */}

          {/* ==========================HEREAREPERKS STARTS ============================= */}
          <div id='howworks'>
            <div class='mt-48'>
              <div
                class='lg:mx-auto lg:max-w-4xl lg:px-2 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'
                data-aos='zoom-in-right'>
                <div class='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
                  <div>
                    <div>
                      <p className='text-dedukt-blue font-CamptonBold font-bold text-5xl pb-8 relative'>
                        Here are some more perks when you use dedukt
                      </p>
                    </div>
                    <div class='mt-6'>
                      <dl class='mt-8 space-y-6'>
                        <dd class='flex'>
                          <img
                            class='w-auto h-full mt-1'
                            src={check}
                            alt='check'
                          />
                          <h2 class='ml-3 font-CamptonBold font-bold text-lg text-gray'>
                            Easily Automated Loan Repayment
                          </h2>
                        </dd>
                        <p className='text-sm ml-7 text-justify font-CamptonLight font-light text-black'>
                          Manual payroll loan payment is subject to human error
                          and financial losses. Imagine the millions you might
                          have lost trying to figure it out manually.
                        </p>
                        <dd class='flex'>
                          <img
                            class='w-auto h-full mt-1'
                            src={check}
                            alt='check'
                          />
                          <h2 class='ml-3 font-CamptonBold font-bold text-lg text-gray'>
                            Increase your revenue
                          </h2>
                        </dd>
                        <p className='text-sm ml-7 text-justify font-CamptonLight font-light text-black'>
                          Many businesses have recorded up to 60% increase in
                          revenue by using dedukt.
                        </p>
                        <dd class='flex'>
                          <img
                            class='w-auto h-full mt-1'
                            src={check}
                            alt='check'
                          />
                          <h2 class='ml-3 font-CamptonBold font-bold text-lg text-gray'>
                            Boost company’s Reputation
                          </h2>
                        </dd>
                        <p className='text-sm ml-7 text-justify font-CamptonLight font-light text-black'>
                          Access accurate information about employees’ loan
                          exposure. help your employees avoid the stress that
                          comes with loan overburden and negative pay.
                        </p>
                        <dd class='flex'>
                          <img
                            class='w-auto h-full mt-1'
                            src={check}
                            alt='check'
                          />
                          <h2 class='ml-3 font-CamptonBold font-bold text-lg text-gray'>
                            Spike in Productivity
                          </h2>
                        </dd>
                        <p className='text-sm ml-7 text-justify font-CamptonLight font-light text-black'>
                          Save time, energy & resources that you could use to
                          achieve massive scale in your business.
                        </p>
                      </dl>
                      <div class='mt-16 ml-1'>
                        <a
                          href='/'
                          onClick={toggleModal}
                          class='inline-flex bg-gradient-to-r from-dedukt-bl to-dedukt-br 
												pr-10 pl-16 py-2 
												border text-lg text-center text-white font-CircularStd-Book font-normal rounded'>
                          {' '}
                          Get started for free{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
                  <div class='lg:px-0 lg:m-0 lg:relative lg:h-full'>
                    <img
                      class='w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                      src={about}
                      alt='about us'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================HEREAREPERKS ENDS ============================= */}
            {/* ==========================GETTING STARTED STARTS ============================= */}
            <div class='relative pt-16 sm:pt-24 pb-16 lg:pt-32'>
              <div class='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div>
                  <h2 class='text-4xl font-bold font-CamptonBold tracking-wider pt-24 pb-24 text-dedukt-blue'>
                    Getting started on dedukt is easy
                  </h2>
                </div>
              </div>
              <div class='pr-32 pl-32'>
                <ol
                  role='list'
                  class='space-y-4 md:flex md:space-y-0 md:space-x-8'>
                  <li class='md:flex-1 relative' data-aos='flip-up'>
                    <p class='text-lg font-bold text-black font-CamptonBold'>
                      Join our
                    </p>
                    <p class='text-base mb-4 font-bold text-black font-CamptonBold'>
                      ecosystem
                    </p>
                    {/*<span class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full'>
                    <span class='text-indigo-600'>01</span>
                  </span>*/}
                    <a
                      href='#'
                      class='pl-4 py-2 flex relative flex-col border-l-2 border-dedukt-sky md:pl-0 md:pt-4 
										lg:pb-6 md:pb-0 md:border-l-0 md:border-t-8 rounded'
                      aria-current='step'
                      data-aos='zoom-in-up'>
                      <span
                        class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 
										bg-dedukt-sky border-dedukt-sky rounded-full'>
                        <span class='text-white font-CamptonBold font-bold text-2xl'>
                          01
                        </span>
                      </span>
                    </a>
                    <span class='text-5xl text-dedukt-blue font-bold mb-6 font-CamptonBold uppercase'>
                      Join
                    </span>
                  </li>

                  <li class='md:flex-1 relative'>
                    <p class='text-lg font-bold text-black font-CamptonBold'>
                      Connect with
                    </p>
                    <p class='text-base mb-4 font-bold text-black font-CamptonBold'>
                      partners
                    </p>

                    <a
                      href='#'
                      class='pl-4 py-2 flex flex-col relative border-l-4 border-dedukt-light md:pl-0 md:pt-4 md:pb-0 
										lg:pb-6 md:border-l-0 md:border-t-8 rounded'
                      aria-current='step'
                      data-aos='zoom-in-up'>
                      <span
                        class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 
										bg-dedukt-sky border-dedukt-sky rounded-full'>
                        <span class='text-white font-CamptonBold font-bold text-2xl'>
                          02
                        </span>
                      </span>
                    </a>
                    <span class='text-5xl text-dedukt-blue font-bold mb-6  font-CamptonBold uppercase'>
                      CONNECT
                    </span>
                  </li>

                  <li class='md:flex-1 relative'>
                    <p class='text-lg font-bold text-black font-CamptonBold'>
                      Set up
                    </p>
                    <p class='text-base mb-4 font-bold text-black font-CamptonBold'>
                      deductions
                    </p>

                    <a
                      href='#'
                      class='pl-4 py-2 flex flex-col relative border-l-4 border-dedukt-light md:pl-0 md:pt-4 md:pb-0 
										lg:pb-6 md:border-l-0 md:border-t-8 rounded'
                      aria-current='step'
                      data-aos='zoom-in-up'>
                      <span
                        class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 
										bg-dedukt-sky border-dedukt-sky rounded-full'>
                        <span class='text-white font-CamptonBold font-bold text-2xl'>
                          03
                        </span>
                      </span>
                    </a>
                    <span class='text-5xl text-dedukt-blue font-bold font-CamptonBold uppercase'>
                      DEDUCT
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* ==========================GETTING STARTED ENDS ============================= */}

          {/* ==========================HOWDEDUKTHELPED STARTS ============================= */}
          <div id='support'>
            <div class='relative pt-8 sm:pt-24 pb-8 lg:pt-32'>
              <div class='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div>
                  <h2 class='text-5xl font-bold font-CamptonBold tracking-wider py-24 text-dedukt-blue'>
                    How has dedukt helped other employers?
                  </h2>
                </div>

                <div class='bg-dedukt-blue rounded'>
                  <div
                    class='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 pb-16 lg:px-8 lg:flex lg:items-center'
                    data-aos='zoom-in-down'>
                    <div class='lg:w-0 lg:flex-1'>
                      <p
                        class='text-center text-2xl text-justify font-light font-CamptonLight tracking-tight 
			text-white sm:text-xl py-4'>
                        Payroll loans can really help motivate employees and
                        boost company revenue, especially for a small-to-medium
                        business like Bright & Co. Constructions. This company
                        got a whopping 67% increase in revenue by implementing
                        good payroll loans that motivated their employees.
                      </p>

                      <p
                        class='text-center text-2xl text-justify font-light font-CamptonLight tracking-tight 
			text-white sm:text-xl py-4'>
                        They were in search of a responsible lender because
                        their staff members started complaining about
                        unnecessarily high-interest rates from the previous
                        lender they were working with.{' '}
                      </p>

                      <p
                        class='text-center text-2xl text-justify font-light font-CamptonLight tracking-tight 
			text-white sm:text-xl py-4'>
                        dedukt connected them with responsible lenders that gave
                        low-interest loans at just 4% per annum. dedukt did not
                        just motivate their employees to achieve a massive scale
                        but they were also able to automate deductions and make
                        informed lending decisions.
                      </p>

                      <p
                        class='text-center text-2xl text-justify font-light font-CamptonLight tracking-tight 
			text-white sm:text-xl pt-10'>
                        A case study on{' '}
                      </p>
                      <p
                        class='text-center text-2xl text-justify font-bold font-CamptonBold tracking-tight 
			text-white sm:text-xl'>
                        Bright & Co. Constructions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==========================HOWDEDUKTHELPED ENDS ============================= */}

          {/* ==========================LOGOPART STARTS ============================= */}
          <div class=''>
            <div class='max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8'>
              <p class='text-center text-5xl font-bold text-dedukt-blue font-CamptonBold tracking-wide'>
                Our good work speaks for itself
              </p>
              <div class='mt-24 mb-8'>
                <div class='flex justify-center' data-aos='flip-left'>
                  <img class='h-full w-3/4' src={logos} alt='logos' />
                </div>
              </div>
            </div>
          </div>
          {/* ==========================LOGOPART ENDS ============================= */}

          {/* ==========================GET STARTED FOR FREE STARTS ============================= */}
          <div class='bg-gradient-to-r from-dedukt-bl to-dedukt-br'>
            <div class='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center'>
              <div class='lg:w-0 lg:flex-1 pt-4'>
                <h2
                  class='text-center text-6xl font-bold font-CamptonBold tracking-wide 
			text-white sm:text-4xl'>
                  Get started for FREE now
                </h2>
              </div>
            </div>
          </div>
          {/* ==========================GET STARTED FOR FREE ENDS ============================= */}

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
      )}
    </Disclosure>
  );
};


export default Navbar;
