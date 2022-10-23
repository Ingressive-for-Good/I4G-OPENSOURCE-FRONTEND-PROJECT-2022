import noMessages from '../../../assets/images/no-messages.png';
import MessagesHeader from '../../../components/molecules/MessagesHeader';
import { Link } from 'react-router-dom';

function MessagesEmpty() {
  return (
    <div className="font-cabinetGrotesk">
      <MessagesHeader />

      <main>
        <div className="flex flex-col items-center mt-24 md:mt-24">
          <img
            src={noMessages}
            alt="empty messages section"
            className="w-44 md:w-96 lg:w-[400px]"
          />
          <h4 className="text-2xl font-bold md:text-3xl mt-4 md:mt-9 lg:mt-4">
            It feels empty here
          </h4>
          <p className="font-campton font-medium text-neutral-600 md:text-xl">
            You are yet to start a conversation
          </p>
          <button className="font-campton bg-primary-500 text-white px-6 py-4 rounded-lg mt-6 md:mt-9">
            <Link to="/admin/messages/start">
              <span>+</span> Start a Chat now
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default MessagesEmpty;
