import MobileNav from "../components/atoms/MobileNav";
import Avatar from "../components/atoms/Avatar";
import Notification from "../components/atoms/Notification";

import defaultAvatar from "../assets/icons/avatar.svg";
import search from "../assets/icons/search-icon.svg";

import techmart from "../assets/icons/techmart.svg";
import noMessages from "../assets/images/no-messages.png";

function MessagesEmpty() {
  return (
    <div className="font-cabinetGrotesk lg:pl-72">
      <header className="mt-10 lg:mt-7 lg:mr-16 px-6 md:px-20 lg:p-0">
        <div className="flex justify-between lg:hidden">
          <img src={techmart} alt="techmart logo" />
          <MobileNav />
        </div>
        <div className="lg:flex lg:justify-between lg:items-end">
          <div className="mt-4 md:mt-8">
            <h2 className="font-medium md:text-lg">Hey Admin👋🏾</h2>
            <h1 className="text-xl font-semibold md:text-2xl">
              Read and Send Messages
            </h1>
          </div>
          <div className="hidden lg:mt-2 lg:flex justify-between items-center">
            <div>
              <div className="flex items-start gap-6 relative">
                <input
                  className="font-campton text-sm placeholder:text-sm placeholder:text-neutral-600 border rounded-lg border-neutral-500 mt-0.5 h-12 px-3.5 pl-8"
                  type="text"
                  placeholder="Search for Gadgets"
                />
                <img
                  src={search}
                  alt="search icon"
                  className="absolute top-1/4 left-2"
                />
                <Notification />
                <Avatar img={defaultAvatar} />
              </div>
            </div>
          </div>
        </div>
      </header>

    <main>
        <div className="flex flex-col items-center mt-24 md:mt-24">
        <img src={noMessages} alt="empty messages section" className="w-44 md:w-96 lg:w-[400px]" />
        <h4 className="text-2xl font-bold md:text-3xl mt-4 md:mt-9 lg:mt-4" >It feels empty here</h4>
        <p className="font-campton font-medium text-neutral-600 md:text-xl">You are yet to start a conversation</p>
        <button className="font-campton bg-primary-500 text-white px-6 py-4 rounded-lg mt-6 md:mt-9"><span>+</span> Start a Chat now</button>
        </div>
    </main>

    </div>
  );
}

export default MessagesEmpty;
