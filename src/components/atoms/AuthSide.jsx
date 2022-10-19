
export default function AuthSide({Main}) {
  return (
    <div className="hidden lg:block lg:w-[40%] bg-primary-50 min-h-screen lg:px-[7%] pt-[49px] ">
      <h1 className='font-cabinetGrotesk text-2xl font-bold text-primary-500 '>tech<span className='text-secondary-500'>mart</span></h1>
      <div className="">
        <img src={Main} alt="Main Image" className='mt-24' />
      </div>
      <p className="text-neutral-600 text-center leading-8 lg:mt-8">
      Verify your email address to stay protected and get the best deals.
      </p>
    </div>
  )
}