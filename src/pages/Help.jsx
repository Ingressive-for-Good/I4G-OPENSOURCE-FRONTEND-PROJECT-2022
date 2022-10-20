import { useState } from 'react';
import curlyArrow from '../assets/icons/curlyArrow.svg';
import chevronUp from '../assets/icons/chevronUp.svg';
import chevronDown from '../assets/icons/chevronDown.svg';
import defaultAvatar from '../assets/icons/avatar.svg';
import search from '../assets/icons/search-icon.svg';
import techmart from '../assets/icons/techmart.svg';
import SideBar from '../components/molecules/SideBar';
import Avatar from '../components/atoms/Avatar';
import Notification from '../components/atoms/Notification';
import MobileNav from '../components/atoms/MobileNav';

// FAQ Questions and Answers in a list
const info = [
  {
    question: 'How do I pay for items',
    answer:
      'On clicking the select button on the kebab menu, it displays select items with the “select all” and “delete” buttons. This is how it works; when clicking “select all” button, it changes to “deselect all” and the “delete” button changes to “done” and vise versa. Also, the “delete” button becomes activated when the “select all” button is clicked which automatically selects the check boxes.',
  },
  {
    question: 'How can I swap my products with other sellers',
    answer:
      'On clicking the select button on the kebab menu, it displays select items with the “select all” and “delete” buttons. This is how it works; when clicking “select all” button, it changes to “deselect all” and the “delete” button changes to “done” and vise versa. Also, the “delete” button becomes activated when the “select all” button is clicked which automatically selects the check boxes.',
  },
  {
    question: 'What type of product can i sell on this platform?',
    answer:
      'On clicking the select button on the kebab menu, it displays select items with the “select all” and “delete” buttons. This is how it works; when clicking “select all” button, it changes to “deselect all” and the “delete” button changes to “done” and vise versa. Also, the “delete” button becomes activated when the “select all” button is clicked which automatically selects the check boxes.',
  },
  {
    question: 'How can I report fraudulent activities',
    answer:
      'On clicking the select button on the kebab menu, it displays select items with the “select all” and “delete” buttons. This is how it works; when clicking “select all” button, it changes to “deselect all” and the “delete” button changes to “done” and vise versa. Also, the “delete” button becomes activated when the “select all” button is clicked which automatically selects the check boxes.',
  },
];

// Question and answer Component

function QnA({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="font-campton flex justify-between px-4 pb-6 pt-6 border-b border-neutral-300 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h3
          className={`${
            isOpen ? 'text-primary-400' : 'text-neutral-900'
          } font-semibold`}
        >
          {question}
        </h3>

        <button>
          <img
            className="w-6"
            src={isOpen ? chevronUp : chevronDown}
            alt="button to toggle hide and reveal for the answer"
          />
        </button>
      </div>
      {isOpen && (
        <p className="font-campton p-4 md:pr-5 md:text-lg">{answer}</p>
      )}
    </div>
  );
}

function Help() {
  return (
    <div className="font-cabinetGrotesk xl:flex">
      <SideBar />
      <div className="mx-5 flex-1 mt-12 font-cabinetGrotesk text-neutral-900 md:mx-10 xl:mr-16 xl:ml-10">
        <div className="flex justify-between xl:hidden items-center">
          <img src={techmart} alt="techmart logo" />
          <MobileNav />
        </div>
        <div className="hidden xl:mt-2 xl:flex justify-between items-center">
          <div className="mt-4 md:mt-8 xl:mt-2">
            <h2 className="font-medium md:text-xl">Hey Nora👋🏾</h2>
            <h2 className="text-xl font-bold md:text-2xl">
              How can we help you?
            </h2>
          </div>
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

        <div className="mt-4 w-48 md:mt-6 md:w-72 flex flex-col">
          <h1 className="md:font-bold md:text-xl">
            Frequently Asked Questions
          </h1>
          <img
            className="-mt-1 w-14 self-center"
            src={curlyArrow}
            alt="underlining arrow for the FAQ title"
          />
        </div>

        <main className="mt-4 border rounded-lg border-neutral-300 xl:mr-4">
          {info.map((item, i) => (
            <QnA key={i} question={item.question} answer={item.answer} />
          ))}
        </main>

        <div className="pt-8 pb-32 md:pt-10">
          <h2 className="font-bold text-neutral-900 text-2xl">
            Still have a question?
          </h2>
          <p className="font-campton md:text-lg text-neutral-700 mt-2">
            Can&apos;t find the answer you are looking for? Don&apos;t fret, we
            are here to help you. Kindly fill the form below;
          </p>
          <p className="font-campton md:text-lg text-neutral-700 mt-4">
            Do you have a complaint? Fill this{' '}
            <a className="text-secondary-500 font-semibold" href="/#">
              form
            </a>{' '}
            to get answers ASAP
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
