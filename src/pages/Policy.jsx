import MainNav from "../components/molecules/MainNav";
import Footer from '../components/molecules/Footer'
import TermsAndPolicyNav from "../components/atoms/TermsAndPolicyNav";

import Arrow from "../assets/icons/arrow.png";

export default function Policy() {
  return (
    <div id="body">
      <MainNav/>
      <div className="flex lg:flex-row flex-col w-full px-[16px] sm:px-[80px] lg:px-0">
        <TermsAndPolicyNav/>
        <div className="w-full pt-[46px]">
          <div className="text-center mt-12 sm:mt-8 lg:mt-0 mb-[41px]">
            <h4 className="text-[30px] text-neutral-900 font-[700] font-cabinet">Privacy Policy</h4>
            <img className="mx-auto" src={Arrow} alt="" />
          </div>
          <div className="flex flex-col gap-[40px] pb-[100px] lg:pr-[64px]">
            <div className="flex flex-col gap-[20px]  pl-[17px]">
              <h4 className="text-neutral-900 font-[700] font-cabinet sm:text-[28px] text-[20px]">Our Legal Policy</h4>
              <div className="text-[18px] font-[400] font-campton leading-8 flex flex-col gap-[10px]">
                <div >
                  <p>
                  Our legal policy is a comprehensive body of rules and regulations and the terms and conditions that govern the use of our platform and services. These rules and conditions are put in place in line with the Laws of  the Federal Republic of Nigeria, to ensure that the integrity of Techmart is not harmed in the process of serving the needs of our users. They are:</p>
                  <ol className="flex flex-col gap-[15px] mb-[20px]">
                    <li>1. Only persons who are 18 years and above can register and be registered on this platform. In other words, to use our marketplace, you must not be less than 18 years of age.</li>
                    <li>
                    2. In creating an account with us, you agree to be bound by our terms and conditions of use.
                    </li>
                    <li>
                    3. In creating an account you must do so as either a Buyer or a Seller. In creating your account:
                    </li>
                    <ol className="flex flex-col gap-[10px] pl-[15px]">
                      <li>
                      a. You will be asked to suplply your email address, phone number, a password, and a means of identification to fully set up your account on the platform. For means of identification, you can tender a birth certifcate, NIN or an international passport.
                      </li>
                      <li>
                      b. The products you put up for sale, as a seller, through your account must be one that is acceptable by the platform. See here for a full list of accepted products.
                      </li>
                      <li>
                      c. The produts you put up for sale, as a seller, through your account, must be in good working condition and free from any defects that have the ability to affect its functionality negatively.
                      </li>
                      <li>
                      d. The products you put up for sale, as a seller, through your account must not be a stolen product and any product or item you advertise on this platform on behalf of another person, must be done with their full and unequivocal consent. 
                      </li>
                      <li>
                      e. To combat criminality and theft, we mandate sellers to upload a valid receipt of any product they intend to sell through this platform.
                      </li>
                    </ol>
                    <li>
                    4. By virtue of your acceptance of our terms and conditions, Techmart, maintains the right to use the contents of your product ads across our marketing channels and on any existing or future media outlet affiliated with Techmart.
                    </li>
                    <li>
                    5. As a user of this platform, you are barred from using this platform for criminal, unethical, fraudulent and immoral purposes. 
                    </li>
                    <li>
                    6. You are barred from engaging in any activity that compromises the security of this platform (hacking, vulnerability testing, exposure to malicious computer softwares, unauthorized decryptions amongst others).
                    </li>
                    <li>
                    7. Techmart maintains and reserves the intellectual property rights and priviledges stemming from contents put up on this platform .
                    </li>
                    <li>
                    8. Techmart’s logo and all its registered and unregistered trademarks, copyrights and patents are reserved by Techmart and not allowed for use by any individual or coorporation without the express consent of Techmart.
                    </li>
                    <li>
                    9. Techmart is not liable for the following any loss or damage that is occassioned by the use of our platform and services . We maintain this exclusion from liability on the basis of our practice of  non interference with issues involving buyers and sellers outside of the confines of our platform and services.   
                    </li>
                    <li>
                    10.  Our services on this platform do not extend beyond connecting  buyers and sellers of technological gadgets and utilities. 
                    </li>
                    <ol className="flex flex-col gap-[10px] pl-[15px]">
                      <li>
                      a. Techmart does not facilitate payments, as there is no payment structure in place to that effect;
                      </li>
                      <li>
                      b. Techmart does not facilitate delivery of purchased products;
                      </li>
                      <li>
                      c.  Techmart does not replace and  repair defective products; 
                      </li>
                      <li>
                      d. Techmart does not mediate or settle disputes between buyers, sellers and any other persons;
                      </li>
                      <li>
                      e. Techmart does not owe any user of this platform a duty of diligence, vigilance, care and safety.
                      </li>
                    </ol>
                  </ol>
                  <p>
                    Nothing in these terms and conditions above will limit any liability in any way that is not permitted in applicable law; and  any excluded liability that is not excluded by law is hereby rendered null.
                  </p>
                  <p>
                  The applicable law for Techmart’s legal terms and conditions is the Law of The Federal Republic of Nigeria that is materially enforceable in line with the Constitution of the Federal Republic of Nigeria, 1999 (as amended).
                  </p>
                </div>
                <div>
                  <h3>Breach of Terms and Conditions:</h3>
                  <p>
                  Any action, inaction, conduct or speech that is contrary to the aforementioned terms and conditions is a breach to our legal policies. The continued use of our platform and market place is subject total observance of the above terms and conditions and a breach to any or all of Techmart’s terms and conditions, in any way may lead to Techmart:
                  </p>
                  <ol>
                    <li>
                    1. temporarily  suspending your account on this platform;
                    </li>
                    <li>
                    2. permanently deleting your account;
                    </li>
                    <li>
                    3. suspending or permanently blocking your computer’s access to our marketplace;
                    </li>
                    <li>
                    4.commencing legal (civil and/ or criminal) actions against you when necessary.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}