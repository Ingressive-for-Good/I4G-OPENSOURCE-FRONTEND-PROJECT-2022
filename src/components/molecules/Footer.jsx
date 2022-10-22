import { Link } from 'react-router-dom';

import facebook from '../../assets/icons/footer-fb.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import upArrow from '../../assets/icons/up-arrow.svg';
import logo from '../../assets/icons/logo.svg';

export default function Footer() {
  return (
        <footer className='bg-[#131418] p-12 lg:flex lg:justify-around relative w-full '>
              <div className='mb-4 lg:mr-8 md:mr-8 lg:items-center'>
                  <div className='logo-md'>
                      <img src={logo} alt='' />
                  </div>
                  <div className='my-8 med-devices'>
                      <p className='my-10 text-xl font-semibold lg:text-center text-white'>
                          © Enterprise martZ Limited
                      </p>
                      <div className='flex'>
                          <a href='#' className='mr-4'>
                              <img
                                  src={facebook}
                                  alt=''
                                  className='w-[39px] md:w-[60px]'
                              />
                          </a>
                          <a href='#' className='mr-4'>
                              <img
                                  src={twitter}
                                  alt=''
                                  className='w-[39px] md:w-[60px]'
                              />
                          </a>
                          <a href='#' className='mr-4'>
                              <img
                                  src={instagram}
                                  alt=''
                                  className='w-[39px] md:w-[60px]'
                              />
                          </a>
                          <a href='#'>
                              <img
                                  src={linkedin}
                                  alt=''
                                  className='w-[39px] md:w-[60px]'
                              />
                          </a>
                      </div>
                  </div>
              </div>
              <div className='footer-items md:flex relative lg:flex lg:justify-evenly lg:items-center'>
                  <div className='about  mb-4 w-fit px-12'>
                      <h5 className='text-white font-bold'>About Us</h5>
                      <ul className=' text-[#FAFAFB]'>
                          <li className='mb-6'>

                              <Link
                                  to='/support'
                                  className=' font-light text-[#FAFAFB]'>
                                  FAQs
                              </Link>
                          </li>
                          <li className='mb-6'>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  Careers
                              </a>
                          </li>
                          <li>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  Blog
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className='products  mb-4  lg:mt-0 px-12 pb-8 '>
                      <h5 className='text-white lg:text-x font-bold'>
                          Products
                      </h5>
                      <ul className=' text-[#FAFAFB]'>
                          <li className='mb-6'>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  For Shopper
                              </a>
                          </li>
                          <li>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  For Vendors
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className='legal  mb-4  px-12'>
                      {' '}
                      <h5 className='text-white font-bold'>Legal</h5>
                      <ul className=' text-[#FAFAFB]'>
                          <li className='mb-6'>
                              <Link
                                  to='/policy'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  Privacy Policy
                              </Link>
                          </li>
                          <li className='mb-6'>
                              <Link
                                  to='/terms'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  Terms of Service
                              </Link>
                          </li>
                          <li>

                              <Link
                                  to='/support'
                                  className=' font-light text-[#FAFAFB]'>
                                  FAQs
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div className='contact lg:w-fit lg:px-12'>
                      {' '}
                      <h5 className='text-white font-bold'>Contact Us</h5>
                      <ul className=' text-[#FAFAFB]'>
                          <li className='mb-6'>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  support@mortz.com
                              </a>
                          </li>
                          <li className='mb-6'>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  Lagos, Nigeria
                              </a>
                          </li>
                          <li className='mb-6'>
                              <a
                                  href='#'
                                  className=' font-light text-[#FAFAFB] hover:text-primary-400'>
                                  08123456789
                              </a>
                          </li>
                          <li className='flex'>
                              <a
                                  href='#hero'
                                  className=' font-light text-[#FAFAFB] mr-2'>
                                  <img
                                      src={upArrow}
                                      alt='up arrow'
                                      className='w-[16px]'
                                  />
                              </a>
                              <span>back to top</span>
                          </li>
                      </ul>
                  </div>
              </div>
        </footer>

  )
}