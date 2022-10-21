import React from 'react';
import Menu from '../assets/icons/Menu-Full.svg'
import Main from '../assets/icons/Main.svg'
import Line from '../assets/icons/Line.svg'
import Hide from '../assets/icons/Hide.svg'
import Google from '../assets/icons/Google.svg'
import Facebook from '../assets/icons/Facebook.svg'

function CreateAccount() {
    return (
    <div className='bg-neutral-50 px-5 py-11 md:px-20 md:py-10 lg:p-0 text-neutral-900 font-campton'>
        <header className='flex lg:hidden justify-between items-center'>
            <h1 className='font-cabinetGrotesk text-2xl font-bold text-primary-500 '>tech<span className='text-secondary-500'>mart</span></h1>

            <a href="" className=''>
                <img src={Menu} alt="Menu Logo"  />
            </a>
           
        </header>
        <main className='flex items-stretch'>
            <section className='hidden w-2/5 lg:flex flex-col justify-around  bg-primary-50 pt-12 pb-24 px-11 xl:px-12'>
                <h1 className='font-cabinetGrotesk text-3xl font-bold text-primary-500 justify-self-start self-start xl:pl-10 pl-8'>tech<span className='text-secondary-500'>mart</span></h1>

                <img src={Main} alt="Main Image" className='mt-24' />

                <p className='text-center lg:mt-3 xl:mt-6 leading-8  text-neutral-600 text-lg'>When you verify email address, your email marketing is more effective, fraud prevention is improved and the ability to protect your sender reputation increases.</p>
            </section>
            <section className='flex justify-center w-screen pt-6 pb-5 md:pt-10 md:pb-9 lg:w-3/5 lg:pt-14 lg:pb-16'>
                <div className='w-full lg:w-4/5 xl:w-3/4'>
                    <h2 className='font-cabinetGrotesk font-bold text-center text-xl md:text-3xl lg:mt-8 xl:mt-6'>Create An Account</h2>
                    <img src={Line} alt="Line Icon" className='mx-auto w-12 md:w-auto' />
                    <p className='text-neutral-700 font-medium mt-6 md:text-lg md:text-neutral-900 md:leading-5 md:mt-10 lg:text-neutral-700'>Fill in the correct details below to create an Account.</p>

                    <form className='pt-6'>
                        <label for="fullName" className='font-medium leading-5'>Full Name</label>
                        <br />

                        <input type="text" id='fullName' placeholder='Enter your full name' className='mt-2 mb-6 md:mb-5 bg-neutral-50 border-2 rounded-lg py-5 px-4 w-full border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5' />
                        <br />

                        <label for="email" className='font-medium leading-5'>Email Address</label>
                        <br />

                        <input type="email" id='email' placeholder='Enter your email address' className='mt-2 mb-6 md:mb-5 bg-neutral-50 border-2 rounded-lg py-5 px-4 w-full border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5' />
                        <br />

                        <label for="password" className='font-medium leading-5'>Password</label>
                        <br />    

                        <div className='relative w-full '>
                            <div className='absolute right-0 pr-4 pt-7'>
                                <img src={Hide} alt="Hide Logo" />
                            </div>

                            <input type="password" id='password' placeholder='Set a 8-character password' className='w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 bg-neutral-50 placeholder:text-neutral-800 placeholder:leading-5' /> 
                        </div>

                        <div className='flex w-full items-center mb-8'>
                            <input type="checkbox" id='terms' className='w-5 h-5 bg-neutral-50 border-2 border-neutral-500 rounded'  />
                            <label for="terms" className='ml-2.5 font-medium'>I agree to the company’s <a href='#' className='font-semibold md:font-bold lg:font-semibold text-secondary-500 hover:text-primary-500'>Terms of Service</a> and <a href='#' className='font-semibold md:font-bold lg:font-semibold text-secondary-500 hover:text-primary-500'>Privacy Policy</a></label>
                        </div>

                        <button type='submit' className='text-center w-full bg-primary-500 rounded-lg py-5 text-white font-bold text-lg leading-6 mb-6 md:mb-4 border-2 border-transparent hover:bg-primary-400 focus:border-2 focus:border-primary-500 focus:bg-transparent focus:text-primary-500'>Proceed</button>
                        
                        <div className='flex w-full items-center mb-6 md:mb-4'>
                            <hr className='w-5/12 border border-neutral-500' />
                            <p className='w-2/12 uppercase text-center font-medium text-neutral-500'>or</p>
                            <hr className='w-5/12 border border-neutral-500' />
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-between lg:justify-around xl:justify-between">
                            <button className='flex w-full font-medium md:font-semibold font-neutral-800 md:font-neutral-900 py-5 border-2 border-primary-300 rounded-lg md:w-5/12 justify-center lg:px-3 hover:bg-primary-500 hover:text-white focus:bg-primary-400'>
                                <img src={Google} alt="Google Icon" className='mr-2.5 lg:mr-0 xl:mr-2.5' />
                                Continue with Google
                            </button>

                            <button className='flex w-full mt-6 md:mt-0  font-medium md:font-semibold font-neutral-800 md:font-neutral-900 py-5 border-2 border-primary-300 rounded-lg md:w-5/12 justify-center lg:px-3 hover:bg-primary-500 hover:text-white focus:bg-primary-400'>
                                <img src={Facebook} alt="Facebook Icon" className='mr-2 lg:mr-0 xl:mr-2' />
                                Continue with Facebook
                            </button>
                        </div>

                        <p className='font-medium mt-10 md:mt-14 leading-6 text-sm text-center'>Already have an account? <a href="#" className='text-base font-bold text-primary-500 hover:text-secondary-500'>Log In</a></p>
                    </form>
                </div>
                
            </section>
        </main>
    </div>
    );
}

export default CreateAccount;
