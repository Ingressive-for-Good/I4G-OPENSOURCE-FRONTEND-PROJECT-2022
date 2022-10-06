import searchIcon from '../icons/Search.svg'
import notificatin from '../icons/notification.svg'
import avatar from '../icons/avatar.svg'
import toggle from '../icons/toggle.svg'


export default function Navbar() {
  return (
      <div className='flex flex-row w-full justify-between'>
        <div className=''>
          <h1 className='text-[25px] text-primary-500 text-primary-500 block lg:hidden'>tech<span className='text-secondary-500'>mart</span></h1>
          <h1 className='text-neutral-800 md:text-[20px] lg:mt-0 mt-[20px] text-[16px] font-[500] lg:pb-0 pb-[10px]'>Hey Nora👋🏾</h1>
          <p className='text-neutral-900 md:text-[28px] font-[500] font-[700]'>Add a New Product</p>
          <p className='md:text-[18px] text-[16px] font-[500]'>Ensure that you are filling the <span className='text-secondary-500'>correct</span> and <span className='text-secondary-500 mt-[24px]'>up-to-date</span> information.</p>
        </div>
        <div className='lg:hidden block mt-[10px]'>
          <div className='py-[17.9px] px-[16.9px] border rounded-[12px] border-primary-500 cursor-pointer w-[50px]'>
            <img className='' src={toggle} alt="" />
          </div>
        </div>
        <div className='lg:flex flex-row gap-[24px] hidden'>
          <label className='relative'>
            <input
              className='py-[16px] pl-[40px] border border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[250px]' 
              type="text" 
              placeholder='Search for gadgets'
            />
            <img className='absolute left-[15px] top-[20px]' src={searchIcon} alt="searchIcon" /> 
          </label>
          <div className='w-[60px]'>
            <img src={notificatin} alt="notification" />
          </div>
          <div className='w-[60px]'>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
    </div>
  )
}