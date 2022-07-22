import React, { Fragment, useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../../assets/dedukt logo.svg';
import logoo from '../../assets/deduktlogoo.svg';
import header from '../../assets/header.svg';
import unlock from '../../assets/unlock.png';
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import aboutt from '../../assets/aboutt.png';
import employers from '../../assets/employers.svg';
import check from '../../assets/check.svg';
import buildd from '../../assets/buildd.svg';
import privicon from '../../assets/privacyicon.png';
import linkedin from '../../assets/LinkedIn.svg';
import Deduktabout from '../../assets/Deduktabout.svg';
//import CountUp from 'react-countup';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import numeral from 'numeral';
import axios from 'axios';
import 'aos/dist/aos.css';

const Employer = () => {
  const url = process.env.REACT_APP_URL;
  const [signUpModal, setSignUpModal] = useState(false);
  const [reqDemoModal, setReqDemoModal] = useState(false);
  const [privacyDemoModal, setPrivacyDemoModal] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [employees, setEmployees] = useState(0);
  const [lenders, setLender] = useState(0);
	const [isEmployerActive, setIsEmployerActive] = useState(true);
  const [deduction, setDeduction] = useState(0);
  const extraContent = (
    <div className='mt-4'>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        We may change this Privacy Policy from time to time. If we make changes,
        we will notify you by revising the date at the top of this policy, and
        in some cases, we may provide you with additional notice (such as by
        adding a statement to the homepages of our website or [mobile
        application] or by sending you an email notification).
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        We encourage you to review the Privacy Policy whenever you interact with
        us to stay informed about our information practices and the ways you can
        help protect your privacy.
      </p>
      <h1 className='mt-4 font-CamptonBold font-bold text-left text-black text-lg'>
        COLLECTION OF INFORMATION
      </h1>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        We may collect and process the following information about you:
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        • Information that you provide to us, for example when you fill out a
        contact or web form, or if you register to receive alerts or updates.
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        • When you provide your Personal Data while signing up for a service or
        purchasing a product.
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        • Personal Data that we obtain or learn, such as information about the
        browser or device you use to access this site, how you use this site and
        the pages you visit, traffic and location data.
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        • When you contact our customer support whether by phone, email, or chat
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        • [We may also ask you for information if you experience problems when
        using this site. We may also ask you to complete surveys for research
        purposes, although you don’t have to respond to these].
      </p>
      <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
        • [Personal Data we receive from other sources: We are working closely
        with third parties. We will notify you when we receive Personal Data
        about you from them and the purposes for which we intend to use that
        Personal Data].
      </p>
    </div>
  );
  const linkName = readMore ? 'Read Less << ' : 'Read More... ';

  const [messageData, setMessageData] = useState({
    name: '',
    company: '',
    email: '',
    phonenumber: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    axios.get('https://app.dedukt.co/api/opens/stats').then((res) => {
      setEmployees(res.data.data.employees);
      setDeduction(res.data.data.deductions);
      setLender(res.data.data.lenders);
    });
  }, []);

  const date = new Date().getFullYear();

  const toggleModal = (e) => {
    e.preventDefault();
    setSignUpModal(!signUpModal);
  };

  const clickModal = (e) => {
    e.preventDefault();
    setReqDemoModal(!reqDemoModal);
  };
  // console.log(messageData.name);

  console.log(setEmployees.employees);

  const selectModal = (e) => {
    e.preventDefault();
    setPrivacyDemoModal(!privacyDemoModal);
  };

  const messageOnchange = (type, text) => {
    switch (type) {
      case 'name':
        return setMessageData({ ...messageData, name: text });
      case 'company':
        return setMessageData({ ...messageData, company: text });
      case 'email':
        return setMessageData({ ...messageData, email: text });
      case 'phonenumber':
        return setMessageData({ ...messageData, phonenumber: text });
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
    <Disclosure as='body' className='bg-white'>
      {({ open }) => (
        <>
          {/* ==========================NAVBAR STARTS================================*/}
          <div
            className='w-screen h-[80px] navbutn bg-white z-10 p-2 mt-0 fixed top-0 drop-shadow-sm mx-auto px-4 
					sm:px-6 xl:px-8 lg:px-0'>
            <div className='flex items-center navpositioning justify-center h-full w-full'>
              <Link className='flex-shrink-0' to='/'>
                <img
                  className='block h-full w-full pl-12 pr-8 lg:pr-6 lg:pl-12 sm:px-0 dedlogo'
                  src={logo}
                  alt='dedukt'
                />
              </Link>
              <div className='flex space-x-2'>
                <a
                  href='/'
                  spy={'true'}
                  smooth={'true'}
                  offset={-70}
                  duration={500}
                  exact='true'
                  onClick={() => {
                    setIsEmployerActive(true);
                  }}
                  className={
                    isEmployerActive
                      ? 'text-transparent bg-clip-text navsizing bg-gradient-to-r xs:hidden from-dedukt-bl to-deduktlg:px-1 px-8 py-3 md:px-1 rounded-md text-base font-medium font-CamptonMedium emp'
                      : 'text-transparent bg-clip-text navsizing bg-black lg:px-1 px-8 py-3 md:px-1 rounded-md text-base font-medium font-CamptonMedium emp'
                  }>
                  Employer
                </a>
                <div className='border-l-2 border bord border-gray'></div>
                <a
                  href='/lender'
                  spy={'true'}
                  smooth={'true'}
                  offset={-70}
                  duration={500}
                  exact='true'
                  onClick={() => {
                    setIsEmployerActive(false);
                  }}
                  className={
                    !isEmployerActive
                      ? 'text-transparent bg-clip-text navsizing bg-gradient-to-r xs:hidden from-dedukt-bl to-dedukt lg:px-1 px-8 py-3 md:px-1 rounded-md text-base font-medium font-CamptonMedium emp'
                      : 'text-transparent bg-clip-text navsizing bg-black lg:px-1 px-8 py-3 md:px-1 rounded-md text-base font-medium font-CamptonMedium emp'
                  }>
                  Lender
                </a>
              </div>
              <div className='flex items-center'>
                <div className='hidden navspacing navspcing xl:ml-48 sm:block md:flex md:justify-between sm:ml-6'>
                  <div className='flex space-x-4'>
                    <a
                      href='#aboutus'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='text-black abtpadding navsizing navspcing lg:px-1 px-8 py-3 md:px-1 
											rounded-md text-base font-medium font-CamptonMedium'>
                      About us
                    </a>
                    <a
                      href='#howworks'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='text-black lg:px-1  px-8 py-3 md:px-1 
											rounded-md text-base font-medium navsizing navspcing font-CamptonMedium'>
                      How It works
                    </a>
                    <a
                      href='#support'
                      spy={'true'}
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='text-black lg:px-1  px-8 py-3 md:px-1 
											rounded-md text-base font-medium navsizing navspcing font-CamptonMedium'>
                      Get Support
                    </a>

                    <a
                      href={url + 'login'}
                      spy={'true'}
                      target='_blank'
                      rel='noreferrer'
                      smooth={'true'}
                      offset={-70}
                      duration={500}
                      exact='true'
                      className='inline-flex mr-6 navsizing navspcing items-center px-4 py-2  
										 text-base font-normal rounded-md
										font-CircularStd-Book text-black'>
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
                      className=' inline-flex mr-16 items-center px-8 py-3 navsizing navspcing border 
										bg-gradient-to-r from-dedukt-bl to-dedukt-br text-base font-normal rounded 
										font-CircularStd-Book text-white'>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className='-mr-2 flex md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex men-icon items-center mr-5 justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
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
            <div className='px-2 pt-2 navsmall pb-3 space-y-1'>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='/'
                className='text-black block px-3 py-2 rounded-md text-base font-medium 
								font-CamptonMedium'>
                Employer
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/lender'
                className='text-black block px-3 py-2 rounded-md text-base font-medium 
								font-CamptonMedium'>
                Lender
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#aboutus'
                className='text-black block px-3 py-2 rounded-md text-base font-medium 
								font-CamptonMedium'>
                About us
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#howworks'
                className='text-black block px-3 py-2 rounded-md text-base font-medium 
								font-CamptonMedium'>
                How It works
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#support'
                className='text-black block px-3 py-2 rounded-md text-base font-medium 
								font-CamptonMedium'>
                Get Support
              </Disclosure.Button>
              <a
                href={url + 'login'}
                target='_blank'
                rel='noreferrer'
                className='inline-flex mr-6 items-center text-black px-3 py-2 
										rounded-md text-base font-medium 
								font-CamptonMedium'>
                Sign In
              </a>
            </div>
            <div>
              <div className='pt-2 pb-2'>
                <div className='px-4'>
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
          </Disclosure.Panel>
          {/* ==========================NAVBAR ENDS================================*/}
          {/* ==========================HERO SECTION STARTS ============================= */}
          <div class='lg:relative heropading lg:my-10 md:my-10'>
            <div
              class='mx-auto heroo holdContainer max-w-7xl w-full pt-12 pb-12 text-center lg:text-left px-8 overflow-hidden'
              data-aos='fade-up-down'>
              <div class='px-4 herospacing lg:w-1/2 sm:px-8'>
                <h1
                  class='text-5xl font-CamptonBold text-black font-bold 
								sm:text-2xl md:text-3xl lg:text-5xl tracking-tight xl:text-5xl herofirst lg:text-left'>
                  We solve the problem of loan overburden and negative pay
                </h1>
                <p
                  class='mt-4 max-w-md mx-auto text-base herosecond font-CamptonLight text-black 
								sm:text-xs md:mt-4 lg:text-base xl:text-base md:max-w-3xl text-left'>
                  Our product is built to analyze your employees debt to income
                  ratio and as such an employee can only access what he or she
                  is capable of paying without incurring a negative balance on
                  his or her monthly income.
                </p>
                <div class='mt-10 sm:flex sm:justify-center lg:justify-start'>
                  <div class='rounded-md'>
                    <a
                      href='/'
                      onClick={toggleModal}
                      class='w-full flex items-center justify-center px-4 py-4 border
									 text-lg text-white startedbtnn font-normal bg-gradient-to-r 
									 from-dedukt-bl to-dedukt-br rounded md:py-4 md:text-lg lg:text-lg'>
                      Get started for free
                    </a>
                  </div>
                </div>

                <div class='mt-20 sm:flex sm:justify-center lg:justify-start'>
                  <div class='relative max-w-7xl'>
                    <div class='max-w-4xl mx-auto'>
                      <dl
                        class='rounded bg-gradient-to-r counterhero px-8 py-4 gap-10 from-dedukt-gl
											 to-dedukt-gr shadow sm:grid sm:grid-cols-3'>
                        <div class='flex flex-col border-b countbod border-dedukt-blue p-4 ml-8 text-center sm:border-0'>
                          <dt class='order-2 mt-2 text-sm leading-3 font-medium font-CamptonMedium text-dedukt-blue'>
                            Employees
                          </dt>
                          <dd class='order-1 text-2xl font-bold text-dedukt-blue font-CamptonBold'>
                            {numeral(employees).format('0a')}+
                          </dd>
                        </div>
                        <div
                          class='flex flex-col border-t border-b countbod border-dedukt-blue p-4 text-center 
												sm:border-0 sm:border-l-2 ml-2.5'>
                          <dt class='order-2 mt-2 text-sm leading-3 font-medium font-CamptonMedium text-dedukt-blue'>
                            Transactions
                          </dt>
                          <dd class='order-1 text-2xl font-bold text-dedukt-blue font-CamptonBold'>
                            {/*<CountUp start={0} end={50000} duration={3} />+*/}
                            {numeral(deduction).format('0a')} +
                          </dd>
                        </div>
                        <div class='flex flex-col border-t countbod border-dedukt-blue p-4 text-center sm:border-0 sm:border-l-2'>
                          <dt
                            class='order-2 mt-2 text-sm text-dedukt-bluetext-sm leading-3 
													font-medium font-CamptonMedium text-dedukt-blue'>
                            Partners
                          </dt>
                          <dd class='order-1 text-2xl font-bold text-dedukt-blue font-CamptonBold'>
                            {numeral(lenders).format('0a')}+
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
                <div
                  class='relative w-full headerimg h-64 sm:h-72 md:h-96 
				lg:absolute lg:inset-y-0 lg:right-0 lg:h-full'>
                  <img
                    class='absolute w-11/12 heroimg h-full'
                    src={header}
                    alt='header'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ==========================HERO SECTION ENDS ============================= */}

          {/* ==========================UNLOCK STARTS ============================= */}
          <div class='relative pt-8 unlockpaad sm:pt-24 pb-8 lg:pt-32'>
            <div class='sm:flex sm:justify-end lg:justify-end'>
              <div class='rounded-md origin-bottom-right -rotate-90'>
                <a
                  href='/'
                  onClick={selectModal}
                  class='w-full relative flex items-center justify-center px-8 py-3 border
									 text-lg text-white privibtn text-left font-normal bg-gradient-to-r 
									 from-dedukt-bl to-dedukt-br rounded md:py-4 md:text-lg lg:text-xl'>
                  Privacy Policy
                  <img
                    class='h-5 w-5 ml-2 rotate-90'
                    src={privicon}
                    onClick={selectModal}
                    alt='terms'
                  />
                </a>
              </div>
            </div>
            <div class='mx-auto px-4 holdContainer text-center sm:px-6 sm:max-w-full lg:px-8 lg:max-w-7xl'>
              <div class='py-9 px-10 unlockwidthh bg-gradient-to-r from-dedukt-bl to-dedukt-br rounded-md'>
                <div class='lg:grid lg:grid-flow-row-dense unlockgrid lg:py-20 px-28 lg:grid-cols-2 lg:gap-8 lg:items-center'>
                  <div class='lg:col-start-1 pb-10 px-1 unlockmargin mr-16'>
                    <div>
                      <h1 className='text-white text-left tracking-tight unlockfirst font-CamptonBold font-bold text-5xl'>
                        Unlock the power of money to your employees.
                      </h1>
                      <p className='mt-7 text-base text-left font-CamptonBook unlocksecond font-normal text-white'>
                        We help your employees access instant loans with
                        convenient repayment from accredited lenders on Dedukt.
                        We’ve got your employees' financial needs covered.
                      </p>
                    </div>
                  </div>
                  <div class='mt-10 -mx-4 relative unlock lg:mt-0 lg:col-start-2'>
                    <img
                      class='relative max-w-full max-h-full object-fill mx-auto'
                      src={unlock}
                      alt='man and woman'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==========================UNLOCK ENDS ============================= */}
          {/* ==========================WHY YOU NEED DEDUKT STARTS ============================= */}
          <div class='mt-56 deduktmarginn'>
            <div class='relative holdContainer mt-12 sm:mt-16 lg:mt-24'>
              <div class='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
                <div class='lg:col-start-2 relative deduktneed'>
                  <div>
                    <p
                      className='text-black text-left whyfirst tracking-tight 
										font-CamptonBold font-bold text-4xl relative'>
                      Why you need Dedukt
                      <br />
                      for your company
                    </p>
                  </div>
                  <div class='mt-6 whysecond'>
                    <dl class='mt-8 whytextt space-y-6'>
                      <dd class='flex'>
                        <img
                          class='w-auto h-full mt-1'
                          src={check}
                          alt='check'
                        />
                        <h2 class='ml-3 font-CamptonBold font-bold text-lg text-grey'>
                          Improve Employee Productivity
                        </h2>
                      </dd>
                      <p className='text-base ml-7 whythird text-justify font-CamptonLight font-light text-black'>
                        Access to funds when needed is therapeutic. If employees
                        do not need to worry about money, you will get the best
                        results from them. Let’s help you finance their needs.
                      </p>
                      <dd class='flex'>
                        <img
                          class='w-auto h-full mt-1'
                          src={check}
                          alt='check'
                        />
                        <h2 class='ml-3 font-CamptonBold font-bold text-lg text-grey'>
                          Manage Employee Exposure
                        </h2>
                      </dd>
                      <p className='text-base ml-7 text-justify whythird font-CamptonLight font-light text-black'>
                        Dedukt was built to not only give loans to employees but
                        to also help manage the risk in taking loans. Everything
                        has been automated to fit every employee's capacity and
                        as such your loan or income cannot go wrong with our
                        product.
                      </p>
                      <dd class='flex'>
                        <img
                          class='w-auto h-full mt-1'
                          src={check}
                          alt='check'
                        />
                        <h2 class='ml-3 font-CamptonBold font-bold text-lg text-grey'>
                          Easily Automated Loan Repayment
                        </h2>
                      </dd>
                      <p className='text-base ml-7 text-justify whythird font-CamptonLight font-light text-black'>
                        Our repayment system is fully automated and flexible. We
                        believe paying back loans should also be convenient for
                        your employees and as such our repayment structure was
                        built to make it easy and affordable to repay loans.
                      </p>
                    </dl>
                    <div class='mt-16 starteddbtn'>
                      <a
                        href='/'
                        onClick={toggleModal}
                        class='inline-flex bg-gradient-to-r from-dedukt-bl to-dedukt-br 
											 py-4 
												border text-lg text-center whybtn text-white font-CircularStd-Book font-normal rounded'>
                        {' '}
                        Get started for free{' '}
                      </a>
                    </div>
                  </div>
                </div>
                <div class='whyabt relative aboutt lg:col-start-1'>
                  <img
                    class='relative mx-auto max-w-full max-h-full object-fill'
                    src={aboutt}
                    alt='about us'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ==========================WHY YOU NEED DEDUKT ENDS ============================= */}

          {/* ==========================HOWDEDUKTHELPED STARTS ============================= */}
          <div id=''>
            <div class='relative deduktspacingg pt-80 sm:pt-24 pb-8 lg:pt-80'>
              <div class='mx-auto holdContainer max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div class='py-10 px-10 studywidthh bg-gradient-to-r from-dedukt-bl to-dedukt-br rounded'>
                  <div
                    class='relative mt-12 pb-10 howdiv lg:mt-12 lg:grid lg:grid-cols-2 
									lg:gap-8 lg:items-center'
                    data-aos='fade-down'>
                    <div class='relative pl-20 py-24 loanspacing'>
                      <h2
                        class='text-3xl font-bold howfirst font-CamptonBold tracking-normal 
									text-white text-left pb-6'>
                        How has dedukt helped other employers?
                      </h2>
                      <p class='mt-3 mb-10 text-base font-CamptonLight howsecond font-light text-white text-justify'>
                        Payroll loans can really help motivate employees and
                        boost company revenue, especially for a small-to-medium
                        business like Bright & Co. Constructions. This company
                        got a whopping 67% increase in revenue by implementing
                        good payroll loans that motivated their employees.
                      </p>
                      <p class='mt-3 mb-10 text-base font-CamptonLight howsecond font-light text-white text-justify'>
                        They were in search of a responsible lender because
                        their staff members started complaining about
                        unnecessarily high-interest rates from the previous
                        lender they were working with.
                      </p>
                      <p class='mt-3 mb-10 text-base font-CamptonLight howsecond font-light text-white text-justify'>
                        dedukt connected them with responsible lenders that gave
                        low-interest loans at just 4% per annum. dedukt did not
                        just motivate their employees to achieve a massive scale
                        but they were also able to automate deductions and make
                        informed lending decisions.
                      </p>
                      <div className='lg:items-start'>
                        <h3 className='mt-3 pr-20 howtext text-2xl text-white'>
                          <span className='font-normal pr-48 howtextfirst font-CamptonLight'>
                            A case study on{' '}
                          </span>
                          <br />
                          <span className='font-bold font-CamptonBold howtextsecond pr-16'>
                            Bright & Co. Constructions
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div
                      class='mt-10 -mx-4 relative howimg lg:mt-0'
                      aria-hidden='true'>
                      <img
                        class='relative mx-auto studyimg'
                        width='490'
                        src={employers}
                        alt='employers'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==========================HOWDEDUKTHELPED ENDS ============================= */}

          {/* ==========================GETTING STARTED STARTS ============================= */}
          <div id='howworks' className='holdContainer'>
            <div class='relative pt-16 sm:pt-24 pb-16 lg:pt-52 lg:pb-48'>
              <div class='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'></div>
              <div class='pr-32 pl-32 getstarted'>
                <ol
                  role='lis'
                  class='space-y-4 md:flex md:space-y-0 md:space-x-8 getstartedd'>
                  <li class='md:flex-1 relative' data-aos='fade-left'>
                    <p class='text-lg startedfirst font-bold text-black font-CamptonBold'>
                      Join our
                    </p>
                    <p class='text-lg mb-4 startedfirst font-bold text-black font-CamptonBold'>
                      ecosystem
                    </p>
                    {/*<span class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full'>
                    <span class='text-indigo-600'>01</span>
                  </span>*/}
                    <a
                      href='/'
                      class='pl-4 py-2 flex relative flex-col border-l-2 border-dedukt-sky md:pl-0 md:pt-4 
										lg:pb-6 md:pb-0 md:border-l-0 md:border-t-8 rounded'
                      aria-current='step'>
                      <span
                        class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 
										bg-dedukt-sky border-dedukt-sky rounded-full'>
                        <span class='text-white font-CamptonBold font-bold text-2xl'>
                          1
                        </span>
                      </span>
                    </a>
                    <span
                      class='text-5xl startedsecond text-sky font-bold mb-6 
										font-CamptonBold uppercase'>
                      Join
                    </span>
                  </li>

                  <li class='md:flex-1 relative' data-aos='fade-right'>
                    <p class='text-lg font-bold startedfirst text-black font-CamptonBold'>
                      Connect with
                    </p>
                    <p class='text-lg mb-4 font-bold startedfirst text-black font-CamptonBold'>
                      partners
                    </p>

                    <a
                      href='/'
                      class='pl-4 py-2 flex flex-col relative border-l-4 border-dedukt-light md:pl-0 md:pt-4 md:pb-0 
										lg:pb-6 md:border-l-0 md:border-t-8 rounded'
                      aria-current='step'>
                      <span
                        class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 
										bg-dedukt-sky border-dedukt-sky rounded-full'>
                        <span class='text-white font-CamptonBold font-bold text-2xl'>
                          2
                        </span>
                      </span>
                    </a>
                    <span class='text-5xl text-sky startedsecond font-bold mb-6  font-CamptonBold uppercase'>
                      CONNECT
                    </span>
                  </li>

                  <li class='md:flex-1 relative' data-aos='fade-left'>
                    <p class='text-lg font-bold startedfirst text-black font-CamptonBold'>
                      Set up
                    </p>
                    <p class='text-lg mb-4 font-bold startedfirst text-black font-CamptonBold'>
                      deductions
                    </p>

                    <a
                      href='/'
                      class='pl-4 py-2 flex flex-col relative border-l-4 border-dedukt-light md:pl-0 md:pt-4 md:pb-0 
										lg:pb-6 md:border-l-0 md:border-t-8 rounded'
                      aria-current='step'>
                      <span
                        class='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 
										bg-dedukt-sky border-dedukt-sky rounded-full'>
                        <span class='text-white font-CamptonBold font-bold text-2xl'>
                          3
                        </span>
                      </span>
                    </a>
                    <span class='text-5xl text-sky startedsecond font-bold font-CamptonBold uppercase'>
                      DEDUCT
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* ========================== GETTING STARTED ENDS ============================= */}

          {/*================ WHO DID WE BUILD FOR STARTS ========================*/}
          <div className=''>
            <div class='py-24 whopadding bg-gradient-to-r from-dedukt-bl to-dedukt-br rounded'>
              <div class='relative'>
                <div class='lg:grid buildspcing lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
                  <div class='lg:col-start-2 whoheading' data-aos='fade-left'>
                    <div>
                      <p className='text-white whotext font-CamptonBold font-bold tracking-tight text-left text-4xl relative'>
                        Who did we build <br /> dedukt for?
                      </p>
                    </div>
                    <div class='mt-6'>
                      <dl class='mt-8 whoalign space-y-6'>
                        <dd class='flex'>
                          <h2 class='font-CamptonBold whotextfirst font-semibold text-left text-2xl text-white'>
                            Employees
                          </h2>
                        </dd>
                        <p className='text-base whotextsecond font-CamptonBook text-left font-normal text-white'>
                          Get access to various automated loans, savings and
                          thrift products with ease all in one place. Be in full
                          control of your finances by determining which
                          deductions come off your paycheck, monitor loan
                          repayments and other savings and thrifts.
                        </p>
                        <dd class='flex'>
                          <h2 class='font-CamptonBold font-semibold whotextfirst text-left text-2xl text-white'>
                            Employers
                          </h2>
                        </dd>
                        <p className='text-base text-left whotextsecond font-CamptonBook font-normal text-white'>
                          Whether you’re a Federal, State, Military or Private
                          Sector employer, Dedukt helps you keep track of
                          employee loan exposure and also relieves you of the
                          burden of having to offer financial help to employees
                          emergency needs, we will do it for you with ease.
                        </p>
                        <dd class='flex'>
                          <h2 class='font-CamptonBold text-left whotextfirst font-semibold text-2xl text-white'>
                            Banks & Fintechs
                          </h2>
                        </dd>
                        <p className='text-base text-left whotextsecond font-CamptonBook font-normal text-white'>
                          Connect with Employers and deliver workplace financial
                          services to your customers with simplified payroll
                          deductions
                        </p>
                      </dl>
                      <div class='mt-16 ml-1'>
                        <a
                          href='/'
                          onClick={clickModal}
                          class='inline-flex bg-white whobtn pr-32 pl-32 py-4 
												border text-base text-center text-black font-CircularStd-Book font-normal rounded'>
                          {' '}
                          Request a Demo{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class='mt-10 -mx-4 pl-16 whoimg relative lg:mt-0 lg:col-start-1'
                    data-aos='fade-left'>
                    <img
                      class='relative mx-auto w-auto'
                      src={buildd}
                      alt='build'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*================ WHO DID WE BUILD FOR ENDS ========================*/}
          {/*======================= VALUES LIVE BY STARTS =========================*/}
          <div id='aboutus' className='holdContainer'>
            <div class='relative mt-12 lg:mt-44 lg:mb-32 value'>
              <div class='lg:grid valcontt lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
                <div class='lg:col-start-2 valheading' data-aos='fade-up'>
                  <div>
                    <p className='text-black font-CamptonBold valuetext font-bold text-4xl relative'>
                      Values we live by
                    </p>
                  </div>
                  <div class='mt-6 valuespacing'>
                    <dl class='mt-8 space-y-6 valuespace'>
                      <dd class='flex'>
                        <h2 class='font-CamptonSemiBold valuefirst font-semibold text-2xl text-grey'>
                          Passion
                        </h2>
                      </dd>
                      <p className='text-base text-justify valuesecond font-CamptonMedium font-medium text-grey'>
                        When it comes to technology, we have the best minds but
                        it's not about writing codes, it's all about our drive
                        for success
                      </p>
                      <dd class='flex'>
                        <h2 class='font-CamptonSemiBold valuefirst font-semibold text-2xl text-grey'>
                          Commitment
                        </h2>
                      </dd>
                      <p className='text-base text-justify valuesecond font-CamptonMedium font-medium text-grey'>
                        Our customer first approach helps us understand your
                        needs better, you bet our solutions are just spot on!
                      </p>
                      <dd class='flex'>
                        <h2 class='font-CamptonSemiBold valuefirst font-semibold text-2xl text-grey'>
                          Delivery
                        </h2>
                      </dd>
                      <p className='text-base text-justify valuesecond font-CamptonMedium font-medium text-grey'>
                        We wouldn't stop until you say so but time and accuracy
                        is essential to what we do. Let's work together!
                      </p>
                    </dl>
                  </div>
                </div>
                <div
                  class='relative abtimg lg:col-start-1'
                  data-aos='fade-left'>
                  <img
                    class='relative dedukttimgg mx-auto'
                    src={Deduktabout}
                    alt='dedukt'
                  />
                </div>
              </div>
            </div>
          </div>
          {/*======================= VALUES LIVE BY ENDS ========================= */}
          {/*======================= GROWING LIST STARTS ========================= */}
          <div class='holdContainer'>
            <div class='max-w-7xl partnerspacing  mx-auto py-20 px-4 sm:px-6 lg:px-8'>
              <p
                class='text-center text-4xl font-bold growingtext text-black
							 font-CircularStd-Bold tracking-normal'>
                Join our growing list of satisfied partners
              </p>
              <div class='grid grid-cols-2 pb-16 pt-20 gap-8 md:grid-cols-7 lg:grid-cols-4'>
                <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                  <img
                    class='h-auto ml-64 growingone'
                    data-aos='zoom-in-right'
                    src={logo1}
                    alt='logo'
                  />
                </div>
                <div class='col-span-1 flex justify-center growingtwoo md:col-span-2 lg:col-span-1'>
                  <img
                    class='h-auto ml-12 growingtwo'
                    data-aos='zoom-in-right'
                    src={logo2}
                    alt='Checkoff'
                  />
                </div>
                <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
                  <img
                    class='h-auto mr-12 growingthree'
                    data-aos='zoom-in-right'
                    src={logo3}
                    alt='liberty'
                  />
                </div>
                <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
                  <img
                    class='h-auto mr-64 growingfour'
                    data-aos='zoom-in-left'
                    src={logo4}
                    alt='terms'
                  />
                </div>
              </div>
              <div class='mt-16 ml-1 text-center'>
                <a
                  href='/'
                  onClick={clickModal}
                  class='inline-flex bg-gradient-to-r from-dedukt-bl to-dedukt-br 
												pr-80 pl-80 py-4 
												border text-base reqdemobtn text-center text-white font-CamptonMedium 
												font-normal rounded'>
                  {' '}
                  Request a Demo{' '}
                </a>
              </div>
            </div>
          </div>
          {/*======================= GROWING LIST ENDS ========================= */}
          {/* ==========================GET SUPPORT STARTS ============================= */}
          <div id='support' className='holdContainer'>
            <div className='support-padding'>
              <div className='container'>
                <div className='support-text'>
                  <h1 className='text-black font-bold tracking-normal supptfirst font-CamptonBold text-4xl'>
                    How can we help you <br />
                    today?
                  </h1>
                  <p className='mt-4 mb-3 font-grey font-normal supptsecond font-CircularStd-Book text-base'>
                    We’re all ears. Drop a message and we'll get back to <br />
                    you as soon as possible
                  </p>
                </div>
                <div className='support-logo'>
                  <form
                    className='form-contt shadow-md pt-2 justify-content-center'
                    onSubmit={sendEmail}>
                    <div className='row fom-row'>
                      <div className='col-md-6 mt-4 form-text form-namee'>
                        <label className='form-label font-CamptonMedium text-sm text-grey font-medium'>
                          Full Name
                        </label>
                        <input
                          required
                          value={messageData.name}
                          onChange={(e) =>
                            messageOnchange('name', e.target.value)
                          }
                          className='form-control border border-gradient-to-r from-dedukt-blue to-dedukt-sk rounded'
                          placeholder=''
                        />
                      </div>
                      <div className='col-md-6 mb-4 mt-4 form-text form-maill'>
                        <label className='form-label font-CamptonMedium text-sm text-grey font-medium'>
                          Email Address
                        </label>
                        <input
                          required
                          type='email'
                          value={messageData.email}
                          onChange={(e) =>
                            messageOnchange('email', e.target.value)
                          }
                          className='form-control border border-gradient-to-r from-dedukt-blue to-dedukt-sk rounded'
                          placeholder=''
                        />
                      </div>

                      <div className='col-md-6 mb-5 form-text justify-content-center form-msgg'>
                        <label
                          htmlFor='exampleFormControlTextarea1'
                          className='form-label font-CamptonMedium text-sm text-grey font-medium'>
                          Message
                        </label>
                        <textarea
                          required
                          className='form-control border-gradient-to-r from-dedukt-blue to-dedukt-sk rounded border'
                          value={messageData.message}
                          onChange={(e) =>
                            messageOnchange('message', e.target.value)
                          }
                          id='exampleFormControlTextarea1'
                          rows='6'
                          placeholder=''></textarea>
                      </div>
                    </div>
                    <div className='col-md-6 mb-3 form-text text-center'>
                      <button
                        type='submit'
                        class='btn-lg form-btnn bg-gradient-to-r from-dedukt-bl to-dedukt-br'>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ==========================GET SUPPORT ENDS ============================= */}

          {/*======================= FOOTER STARTS ========================= */}
          <div className=''>
            <footer className='bg-grayy bg-ellipses'>
              <div class='grid grid-cols-2 pb-2 gap-8 md:grid-cols-2 lg:grid-cols-2'>
                <div class='col-span-1 flex deduktt items-start md:col-span-2 lg:col-span-1'>
                  <img
                    className='block pl-16 deduktlogoo w-6/12 h-full pt-20 pr-8 xl:pr-16 xl:pl-32 sm:px-0'
                    src={logoo}
                    alt='dedukt'
                  />
                </div>
                <div class='col-span-1 flex flex-row justify-center md:col-span-2 lg:col-span-1'>
                  <div className='relative pt-20'>
                    <div class='relative col-span-2 flex flex-row justify-between md:col-span-3 lg:col-span-1'>
                      <span className='text-white text-lg mr-3 followtext font-normal font-CircularStd-Book relative'>
                        Follow us on
                      </span>
                      <img
                        class='h-auto iconn'
                        src={linkedin}
                        alt='terms'
                        href='https://www.linkedin.com/company/dedukt/'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class='max-w-7xl mx-auto pt-2 pb-12 px-4 overflow-hidden sm:px-6 xl:px-8'>
                <div class='mt-8 flex justify-center w-full border-t border-white space-x-6'></div>

                <p class='mt-8 text-center footertext text-lg font-CircularStd-Book font-normal text-white'>
                  &copy; {date} Equal Digital Nigeria Limited | All Rights
                  Reserved
                </p>
              </div>
            </footer>
          </div>
          {/*======================= FOOTER ENDS ========================= */}
          {/* ==========================GET STARTED MODAL STARTS ============================= */}

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
          {/* ==========================GET STARTED MODAL ENDS ============================= */}
          {/* ==========================REQUEST DEMO MODAL STARTS ============================= */}

          <Modal
            size='md'
            isOpen={reqDemoModal}
            centered
            backdrop='static'
            keyboard={false}>
            <div className='d-flex p-16 justify-content-center text-center'>
              <ModalBody>
                <form onSubmit={sendEmail} className='modalbdy'>
                  <div className='sm:block modallbdy absolute -top-24 -right-8 pt-4 pr-4'>
                    <button
                      type='button'
                      className='bg-white rounded-full text-white'
                      onClick={clickModal}>
                      <span className='sr-only'>Close</span>
                      <XIcon
                        className='h-6 w-6 bg-gradient-to-r from-dedukt-bl to-dedukt-br rounded-full'
                        aria-hidden='true'
                      />
                    </button>
                  </div>

                  <div className='font-CamptonMedium font-medium reqdemotext text-center text-black text-2xl sm:text-xl'>
                    Kindly fill in the following information, <br />
                    we’d reach out to you within 48 hours.
                  </div>
                  <div className='col-md-6 mt-4 form-text form-req'>
                    <label
                      className='form-label font-CamptonMedium text-xl 
													text-black font-medium'>
                      Name
                    </label>
                    <input
                      required
                      value={messageData.name}
                      onChange={(e) => messageOnchange('name', e.target.value)}
                      className='form-control border-2 border-black rounded'
                      placeholder=''
                    />
                  </div>
                  <div className='col-md-6 mt-4 form-text form-comp'>
                    <label
                      className='form-label font-CamptonMedium text-xl 
													text-black font-medium'>
                      Company Name
                    </label>
                    <input
                      required
                      value={messageData.company}
                      onChange={(e) =>
                        messageOnchange('company', e.target.value)
                      }
                      className='form-control border-2 border-black rounded'
                      placeholder=''
                    />
                  </div>
                  <div className='col-md-6 mt-4 form-text form-maila'>
                    <label
                      className='form-label font-CamptonMedium text-xl 
													text-black font-medium'>
                      Email Address
                    </label>
                    <input
                      required
                      type='email'
                      value={messageData.email}
                      onChange={(e) => messageOnchange('email', e.target.value)}
                      className='form-control border-2 border-black to-dedukt-sk rounded'
                      placeholder=''
                    />
                  </div>
                  <div className='col-md-6 mt-4 form-text form-maila'>
                    <label
                      className='form-label font-CamptonMedium text-xl 
													text-black font-medium'>
                      Phone Number
                    </label>
                    <input
                      required
                      value={messageData.phonenumber}
                      onChange={(e) =>
                        messageOnchange('phonenumber', e.target.value)
                      }
                      className='form-control border-2 border-black rounded'
                      placeholder=''
                    />
                  </div>
                  <button
                    className='mt-5 btn-lg form-btnreq text-base bg-gradient-to-r from-dedukt-blue to-dedukt-sk'
                    type='submit'>
                    Request a Demo
                  </button>
                </form>
              </ModalBody>
            </div>
          </Modal>
          {/* ==========================REQUEST DEMO MODAL ENDS ============================= */}
          {/* ==========================PRIVACY POLICY MODAL STARTS ============================= */}
          <Modal
            size='md'
            isOpen={privacyDemoModal}
            centered
            backdrop='static'
            keyboard={false}>
            <div className='d-flex justify-content-center text-center'>
              <ModalBody>
                <div className='sm:block absolute -top-8 -right-7 pt-4 pr-4'>
                  <button
                    type='button'
                    className='bg-white rounded-full text-white'
                    onClick={selectModal}>
                    <span className='sr-only'>Close</span>
                    <XIcon
                      className='h-6 w-6 bg-gradient-to-r from-dedukt-bl to-dedukt-br rounded-full'
                      aria-hidden='true'
                    />
                  </button>
                </div>

                <div className='font-CamptonMedium font-bold text-left text-black text-xl'>
                  Privacy Policy
                </div>
                {/*<div className=' mt-4'>
                  <h1 class='font-CamptonMedium font-bold text-left text-black text-sm'>
                    1. INTRODUCTION
                  </h1>
                </div>*/}
                <div className='mt-4'>
                  <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
                    We have created this Privacy Policy to explain how we
                    collect, use, disclose and protect your Personal Data,
                    including any other information.
                  </p>
                  <p className='mt-4 font-CamptonBook font-normal text-left text-black text-xs'>
                    You accept this Privacy Policy and hereby give us consent to
                    save, process and use your Personal Data to the extent as
                    allowed by law when you provide us with details of your
                    Personal Data or by clicking on the “agree” button.
                  </p>
                  {/*<p className='mt-2 font-CamptonBook font-normal text-left text-black text-xs'>
                    We may change this Privacy Policy from time to time. If we
                    make changes, we will notify you by revising the date at the
                    top of this policy, and in some cases, we may provide you
                    with additional notice (such as by adding a statement to the
                    homepages of our website or [mobile application] or by
                    sending you an email notification).
                  </p>
                  <p className='mt-2 font-CamptonBook font-normal text-left text-black text-xs'>
                    We encourage you to review the Privacy Policy whenever you
                    interact with us to stay informed about our information
                    practices and the ways you can help protect your privacy.
                  </p>*/}
                </div>
                {readMore && extraContent}
                <button
                  className='mt-5 mr-4 privacy-btnreq btn-lg font-CircularStd-Book text-base text-white text-center
									 bg-gradient-to-r from-dedukt-blue to-dedukt-sk'
                  type='submit'
                  onClick={selectModal}>
                  I Agree
                </button>
                <button
                  className='mt-4 mr-4 btn-lg privacy-btnreq font-CircularStd-Book text-base text-dedukt-blue 
									bg-gradient-to-r 
							from-dedukt-gl to-dedukt-gr'
                  onClick={() => {
                    setReadMore(!readMore);
                  }}>
                  {linkName}
                </button>
              </ModalBody>
            </div>
          </Modal>
          {/* ==========================PRIVACY POLICY MODAL ENDS ============================= */}
        </>
      )}
    </Disclosure>
  );
};

export default Employer;
