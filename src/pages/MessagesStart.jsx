import MessagesHeader from "../components/molecules/MessagesHeader";

function StartMessageBar({ headerText }) {
  return (
    <div className="bg-primary-50 mt-9 lg:mt-20 flex flex-col items-center px-0">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-[40px] mt-5 md:mt-9 ">
        {headerText}
      </h2>
      <button className="font-campton bg-primary-500 text-white px-6 py-4 rounded-lg mt-3.5 mb-4 md:mb-7 md:mt-9 lg:text-lg">
        <span>+</span> Start a Chat now
      </button>
    </div>
  );
}

function MessagesStart() {
  return (
    <div className="font-cabinetGrotesk lg:pl-72">
      <MessagesHeader />
      <main className="px-2 md:px-20">
        <div className="md:mt-20 lg:mt-36">
          <StartMessageBar headerText="Message an Admin" />
        </div>
        <StartMessageBar headerText="Message a User" />
      </main>
    </div>
  );
}

export default MessagesStart;
