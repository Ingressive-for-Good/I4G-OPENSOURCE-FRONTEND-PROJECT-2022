import { NavLink } from "react-router-dom";
import ArrowLeft from '../../assets/icons/arrow-left.svg'

import "../../../styles/terms.css"
export default function TermsAndPolicyNav() {
  return (
    <div className="flex lg:flex-row flex-col gap-[50px] lg:bg-primary-50 lg:w-[400px] lg:justify-center pt-[46px]">
      <div>
        <img src={ArrowLeft} alt="back" />
      </div>
      <div className="flex lg:flex-col gap-[40px]">
        <NavLink className='navlink sm:text-[24px] text-[18px] text-neutral-900 font-[600]' to='/terms'>Terms of Service</NavLink>
        <NavLink className='navlink sm:text-[24px] text-[18px] text-neutral-900  font-[600]' to='/policy'>Privacy Policy</NavLink>
      </div>
    </div>
  )
}