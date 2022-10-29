import Arrow from "../../assets/icons/arrow.png";

export default function Terms() {
  return (
    <div className="w-full pt-[46px]">
          <div className="text-center mt-12 sm:mt-8 lg:mt-0 mb-[41px]">
            <h4 className="text-[30px] text-neutral-900 font-[700] font-cabinet">Terms of Service</h4>
            <img className="mx-auto" src={Arrow} alt="" />
          </div>
          <div className="flex flex-col gap-[40px] pb-[100px] lg:pr-[64px]">
            <div className="flex flex-col gap-[20px]  pl-[17px]">
              <h4 className="text-neutral-900 font-[700] font-cabinet text-[28px]">Privacy and Legal Policy Statement</h4>
              <div className="text-[18px] font-[400] font-campton leading-8 flex flex-col gap-[10px]">
                <p>
                To make use of our platform there are some things you need to know about our practices here at Techmart. We want you to have a good experience and that begins with you having a good understanding of our privacy policies and legal terms and conditions of use. Please note that if you do not agree with our Legal terms and conditions of use and our privacy policy, you cannot continue to make use of the platform and the services we offer. </p>
                <p>
                This statement was last reviewed on......We may update this statement from time to time as we expand operations and as new developments arise, and we most definitely will notify you of any modifications to this statement that may potentially affect your rights and the way and manner you use our services. Please always be on the lookout for notifications to this effect.</p>
                <p>
                Terminologies: In this statement you will come across a number of words that will require some clarity in terms of context and connotation and we are committed to making sure you get the full gist. 
                In this statement, the use of “we” “us” and “our” refer to Techmart and its respective subsidiaries and affiliated entities. The term “Platform” refers to our website, apps and online structures that facilitate buying and selling of tech gadgets. You will also see the words “data” and “information”. Please note that “data” and “information” are used synonymously in this statement. Similarly, the terms “product” and “item” are used interchangeably.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] pl-[17px]">
              <h4 className="text-neutral-900 font-[700] font-cabinet text-[28px]">Our Privacy Policy</h4>
              <div className="text-[18px] font-[400] font-campton leading-8 flex flex-col gap-[10px]">
                <div>
                <p>
                <span className="font-[600]">Who wants cookies? 😊</span><br></br>
                In case you’ve ever wondered, cookies are small text files with small pieces of information like your username and password that are stored within your web browser when you visit a website.  Cookies make your online experience easier by saving your browsing information so that sites can keep you signed in, remember your site preferences, and give you relevant content.
                Cookies are very popular but they are just one of the many ways user information can be collected and retrieved by websites you visit. 
                </p>
                <p>
                  Techmart collects and processes your information when you use or visit our website. In addition to giving you a seamless online experience on our platform, we collect your data or information to help us improve the services we render to you, improve the functionality of our platform, register and verify new and returning users, and customise our services to fit your personal preferences.
                </p>


                <div>
                  <p>
                    In the course of carrying out our operations with the intention of serving you better, we may need to share your data with third parties for some reasons. These reasons include:
                  </p>
                  <ol>
                    <li>1. To facilitate buying and selling on this platform</li>
                    <li>
                      2. To create ads for our services;
                    </li>
                    <li>
                      3. To detect and investigate fraudulent activities on this platform.
                    </li>
                  </ol>
                </div>
                <p>
                Becuase we value your privacy, we ensure that, as a matter of practice, third parties who have access to your data through us, make use of those data in accordance with our terms and the law. Do not fret, your data are in safe hands.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}