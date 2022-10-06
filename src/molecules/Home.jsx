import React from "react";

function App() {
  return (
    <div className="text-neutral-900 bg-primary-50">
      {/* header and navigation */}
      <header className="">
        <h1 className="text-primary-500">tech<span className="text-secondary-500">mart</span></h1>
        <div className="border-primary-500 border-1">
          <img src="images/menu-icon.svg" alt="" />
        </div>
      </header>
      <main>
        {/* hero section */}
        <section>
          <h1>Buy, Sell & Swap Quality Items for techies - all in
            <span className="text-secondary-500">one place</span>
          </h1>
          <p className="text-neutral-700">A platform where techies can buy any physical item and also sell or swap items that they are not in use of,  it also create an avenue for them to connect with other creatives around world.</p>
          <button className="bg-primary-500">Create an account</button>
          <div>
            <a href="" className="text-primary-500">Learn More</a>
            <img src="/images/landingpage_wavy-arrow.svg" alt="" />
          </div>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;