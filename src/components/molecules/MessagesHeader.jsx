import MobileNav from "../atoms/MobileNav";
import Avatar from "../atoms/Avatar";
import Notification from "../atoms/Notification";

import defaultAvatar from "../../assets/icons/avatar.svg";
import search from "../../assets/icons/search-icon.svg";

import techmart from "../../assets/icons/techmart.svg";

function MessagesHeader() {
  return (
    <header className="mt-10 lg:mt-7 lg:mr-16 px-2 md:px-20 lg:p-0">
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
            <div className="flex items-start gap-3 relative">
              <input
                className="font-campton text-sm placeholder:text-sm placeholder:text-neutral-600 border rounded-lg border-neutral-500 mt-0.5 h-12 px-3 pl-8 "
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
  );
}

export default MessagesHeader;
