import React from "react";

function App() {
  return (
    <div className="text-neutral-900 font-campton">
      {/* header and navigation */}
      <header className="bg-primary-50 px-8 py-9 flex items-center justify-between">
        <h1 className="font-cabinetGrotesk text-primary-500 font-bold text-2xl">tech<span className="text-secondary-500">mart</span></h1>
        <div className="border-primary-500 border rounded-xl p-3">
          <img src="src/images/menu-icon.svg" alt="" />
        </div>
      </header>
      <main>
        {/* hero section */}
        <section className="px-[10%] py-4 text-center bg-primary-50">
          <h1 className="font-cabinetGrotesk font-bold text-3xl my-3">Buy, Sell & Swap Quality Items for techies - all in
            <span className="text-secondary-500"> one place.</span>
          </h1>
          <p className="text-neutral-700 font-campton my-3">A platform where techies can buy any physical item and also sell or swap items that they are not in use of,  it also create an avenue for them to connect with other creatives around world.</p>
          <div className="sm:w-fit sm:mx-auto sm:flex sm:justify-center">
            <button className="font-cabinetGrotesk bg-primary-500 text-white px-5 py-4 rounded-lg sm:h-fit">Create an account</button>
            <div className="w-fit mx-auto px-6 py-3 rounded-lg my-2 hover:bg-primary-100 transition-all">
                <a href="" className="font-cabinetGrotesk text-primary-500 font-semibold">Learn More</a>
                <img className="mx-auto" src="src/images/landingpage__wavy-arrow.svg" alt="" />
            </div>
          </div>
        </section>

        {/* why choose us? */}
        <section className="w-fit mx-auto px-6 py-3 rounded-lg my-5 text-center">
            <h1 className="font-cabinetGrotesk text-2xl font-semibold">Why Choose Us?</h1>
            <img className="mx-auto mb-8" src="src/images/landingpage__wavy-underline.svg" alt="" />
            <p className="text-neutral-700">Take control of all your ecommerce transactions</p>
        
            {/* reasons to choose us */}
            <div className="space-y-4 sm:space-y-0 my-8 sm:grid sm:grid-cols-2 sm:gap-5">
                <div className="bg-primary-50 rounded-lg p-6 max-w-xs mx-auto">
                    <img className="mx-auto" src="src/images/landingpage__best-quality.svg" alt="" />
                    <h4 className="font-cabinetGrotesk font-semibold text-xl my-2">Best Quality</h4>
                    <p className="text-neutral-700 text-sm">We offer affordable & reliable products with the best quality.</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6 max-w-xs mx-auto">
                    <img className="mx-auto" src="src/images/landingpage__meetnconnect.svg" alt="" />
                    <h4 className="font-cabinetGrotesk font-semibold text-xl my-2">Meet & Connect</h4>
                    <p className="text-neutral-700 text-sm">Connect with over 20k people on our platform and make sales.</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6 max-w-xs mx-auto">
                    <img className="mx-auto" src="src/images/landingpage__p2p.svg" alt="" />
                    <h4 className="font-cabinetGrotesk font-semibold text-xl my-2">P2P Payment</h4>
                    <p className="text-neutral-700 text-sm">P2P payments are convenient, fast, secured and easy-to-use.</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6 max-w-xs mx-auto w-full">
                    <img className="mx-auto" src="src/images/landingpage__support.svg" alt="" />
                    <h4 className="font-cabinetGrotesk font-semibold text-xl my-2">24/7 Support</h4>
                    <p className="text-neutral-700 text-sm">Do you have a complaint? <br />Fill this <a href=""> form </a>to get answers ASAP</p>
                </div>
                
            </div>
        </section>

        {/* buy an item */}
        <section className="w-fit mx-auto px-6 py-3 rounded-lg my-5 text-center">
            <h1 className="font-cabinetGrotesk text-2xl font-semibold"><span className="text-secondary-500">Buy Items</span>  in 3 Easy Steps</h1>
            <p className="text-neutral-700 my-2">Complete the folowing steps to start selling and earning on our platform.</p>
        
            {/* steps to buy item */}
            <div className="space-y-4 my-8">
                <div className=" max-w-xs mx-auto">   
                    <h4 className="font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2">01. Create an Account</h4>
                    <p className="text-neutral-700 text-sm">Create an account by completing the registration process</p>
                </div>
                <img className="mx-auto" src="src/images/landingpage__wavy-dashed.svg" alt="" />
                <div className="max-w-xs mx-auto">
                    <h4 className="font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2">02. View Products</h4>
                    <p className="text-neutral-700 text-sm">View correct details of the products you want to buy</p>
                </div>
                <img className="mx-auto" src="src/images/landingpage__wavy-dashed.svg" alt="" />
                <div className="max-w-xs mx-auto">
                    <h4 className="font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2">03. Contact Seller</h4>
                    <p className="text-neutral-700 text-sm">Contact seller, agree on a price and get your products</p>
                </div>
                <button className="bg-primary-500 text-white font-medium text-lg px-6 py-5 rounded-lg">Buy an item now</button>
            </div>
        </section>

        {/* list an item */}
        <section className="w-fit mx-auto px-6 py-3 rounded-lg my-5 text-center">
            <h1 className="font-cabinetGrotesk text-2xl font-semibold"><span className="text-secondary-500">List Items</span>  in 3 Easy Steps</h1>
            <p className="text-neutral-700 my-2">Complete the folowing steps to start selling and earning on our platform.</p>
        
            {/* steps to list item */}
            <div className="space-y-4 my-8">
                <div className=" max-w-xs mx-auto">   
                    <h4 className="font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2">01. Create an Account</h4>
                    <p className="text-neutral-700 text-sm">Create an account by completing the registration process</p>
                </div>
                <img className="mx-auto" src="src/images/landingpage__wavy-dashed.svg" alt="" />
                <div className="max-w-xs mx-auto">
                    <h4 className="font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2">02. List Your Products</h4>
                    <p className="text-neutral-700 text-sm">Upload correct details of your products you want to sell.</p>
                </div>
                <img className="mx-auto" src="src/images/landingpage__wavy-dashed.svg" alt="" />
                <div className="max-w-xs mx-auto">
                    <h4 className="font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2">03. Get Notified</h4>
                    <p className="text-neutral-700 text-sm">Get notified when a buyer views and wants to buy your products</p>
                </div>
                <button className="bg-primary-500 text-white font-medium text-lg px-6 py-5 rounded-lg">List an item now</button>
            </div>
        </section>

      {/* products */}
      <section className="w-5/6 mx-auto">
        <h1 className="text-center text-xl font-semibold font-cabinetGrotesk">Popular Products</h1>
        <img className="mx-auto mb-4" src="src/images/landingpage__wavy-underline.svg" alt="" />
        <p className="text-neutral-700 text-center">View a few products from our techies</p>
      
        {/* product list */}
        <div className="grid gap-6">
            <div className=" bg-neutral-50 w-fit mx-auto">
                <img src="src/images/product-keyboard.png" alt="" />
                <div className="border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5">
                    <div>
                        <h5 className="text-neutral-700 font-medium">Workspace Equipment</h5>
                        <h3 className="font-cabinetGrotesk font-semibold text-xl">&#8358;25,000.00</h3>         
                    </div>
                    <img src="src/images/cart-icon.svg" alt="" />
                </div>
            </div>
            <div className="bg-neutral-50 w-fit mx-auto">
                <img src="src/images/product-controller.png" alt="" />
                <div className="border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5">
                    <div>
                        <h5 className="text-neutral-700 font-medium">Gaming Pad</h5>
                        <h3 className="font-cabinetGrotesk font-semibold text-xl">&#8358;100,000.00</h3>
                    </div>
                    <img src="src/images/cart-icon.svg" alt="" />
                </div>
            </div>
            <div className="bg-neutral-50 w-fit mx-auto">
                <img src="src/images/product-controller.png" alt="" />
                <div className="border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5">
                    <div>
                        <h5 className="text-neutral-700 font-medium">Gaming Pad</h5>
                        <h3 className="font-cabinetGrotesk font-semibold text-xl">&#8358;100,000.00</h3>
                    </div>
                    <img src="src/images/cart-icon.svg" alt="" />
                </div>
            </div>
            <div className="bg-neutral-50 w-fit mx-auto">
                <img src="src/images/product-keyboard.png" alt="" />
                <div className="border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5">
                    <div>
                        <h5 className="text-neutral-700 font-medium">Workspace Equipment</h5>
                        <h3 className="font-cabinetGrotesk font-semibold text-xl">&#8358;25,000.00</h3>         
                    </div>
                    <img src="src/images/cart-icon.svg" alt="" />
                </div>
            </div>
        </div>
        <button className="bg-primary-500 rounded-lg px-6 py-4 font-semibold text-white mx-auto w-fit">See More</button>
      </section>

      {/* newsletter subscription*/}
        <section className="bg-primary-500 p-6 w-5/6 mx-auto my-16 rounded-lg">
            <h1 className="text-center text-white text-3xl font-semibold font-cabinetGrotesk">Subscribe for Updates</h1>
            <img className="mx-auto mb-4" src="src/images/landingpage__wavy-underline.svg" alt="" />
            <p className="text-white text-center my-5">Subscribe to our newsletter to get the latest updates on our platform</p>
            <form className="space-y-4 flex flex-col justify-center">
                <input className="w-full active:border-2 active:border-neutral-300 rounded-lg px-6 py-4" type="text" placeholder="Enter your full name" required/>
                <input className="w-full active:border-2 active:border-neutral-300 rounded-lg px-6 py-4" type="email" placeholder="Enter your email address" required/>
                <button className="bg-secondary-500 text-white font-medium text-lg px-6 py-4 rounded-lg mx-auto">Subscribe</button>
            </form>
        </section>

        {/* client reviews */}
        <section className="w-5/6 mx-auto">
            <h1 className="text-center text-3xl font-cabinetGrotesk font-medium">Client Reviews</h1>
            <img className="mx-auto" src="src/images/landingpage__wavy-underline.svg" alt="" />
            <p className="text-center my-3">We serve hundreds of thousands of customers and this is what people are saying about us.</p>
            
            {/* review grid */}
            <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-7">
                    <img className="mx-auto my-4" src="src/images/landingpage__client-profile-img.svg" alt="" />
                    <p className="text-neutral-900 text-center leading-relaxed">"techmart is unarguably the best eccomerce platform - a great transforation to Africa"</p>
                    <h5 className="text-xl font-semibold text-center mt-5">Aisha Issa</h5>
                    <p className="text-center w-fit mx-auto">techmart Vendor</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-7">
                    <img className="mx-auto my-4" src="src/images/landingpage__client-profile-img.svg" alt="" />
                    <p className="text-neutral-900 text-center leading-relaxed">"techmart is unarguably the best eccomerce platform - a great transforation to Africa"</p>
                    <h5 className="text-xl font-semibold text-center mt-5">Aisha Issa</h5>
                    <p className="text-center w-fit mx-auto">techmart Vendor</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-7">
                    <img className="mx-auto my-4" src="src/images/landingpage__client-profile-img.svg" alt="" />
                    <p className="text-neutral-900 text-center leading-relaxed">"techmart is unarguably the best eccomerce platform - a great transforation to Africa"</p>
                    <h5 className="text-xl font-semibold text-center mt-5">Aisha Issa</h5>
                    <p className="text-center w-fit mx-auto">techmart Vendor</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-7">
                    <img className="mx-auto my-4" src="src/images/landingpage__client-profile-img.svg" alt="" />
                    <p className="text-neutral-900 text-center leading-relaxed">"techmart is unarguably the best eccomerce platform - a great transforation to Africa"</p>
                    <h5 className="text-xl font-semibold text-center mt-5">Aisha Issa</h5>
                    <p className="text-center w-fit mx-auto">techmart Vendor</p>
                </div>
            </div>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;