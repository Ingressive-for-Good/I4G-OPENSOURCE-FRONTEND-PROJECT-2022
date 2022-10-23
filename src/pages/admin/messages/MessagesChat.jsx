import { useState } from 'react';

import MessagesHeader from '../../../components/molecules/MessagesHeader';
import MessageInput from '../../../components/molecules/MessageInput';
import Avatar from '../../../components/atoms/Avatar';
import MessagePreview from '../../../components/molecules/MessagePreview';
import { Sending, Receiving } from '../../../components/molecules/MessageView';

import avatar2 from '../../../assets/images/avatar2.png';
import avatar3 from '../../../assets/images/avatar3.png';
import avatar4 from '../../../assets/images/avatar5.png';
import avatar5 from '../../../assets/images/avatar6.png';

import back from '../../../assets/icons/back.svg';

function MessagesChat() {
  const [preview, setPreview] = useState(true);
  const [chat, setChat] = useState(false);

  // These functions are for switching between the chat preview interface and the actual chat interface on medium and small screens
  function handleClick() {
    const width = window.innerWidth;
    if (width > 1279) {
      return;
    } else {
      setPreview(!preview);
      setChat(!chat);
    }
  }

  function handleBackClick() {
    setPreview(!preview);
    setChat(!chat);
  }

  return (
    <div className="font-cabinetGrotesk">
      <MessagesHeader />

      <main className="border-[1.2px] mb-20 xl:flex border-neutral-500 rounded-lg mr-2 ml-2 mt-8 md:mx-20 lg:mx-0 lg:mr-16">
        <div className={`xl:w-2/5 xl:block ${preview ? 'block' : 'hidden'}`}>
          <h2 className="text-lg font-semibold py-7 pl-8 ">Your Messages</h2>
          <MessagePreview avatar={avatar2} onClick={handleClick} />
          <MessagePreview avatar={avatar3} onClick={handleClick} />
          <MessagePreview avatar={avatar4} onClick={handleClick} />
          <MessagePreview avatar={avatar5} onClick={handleClick} />
        </div>

        <div
          className={`font-campton relative h-[764px] xl:border-l-[1.2px] xl:border-neutral-500 rounded-lg bg-primary-50 xl:w-4/6 xl:block ${
            chat ? 'block' : 'hidden'
          } `}
        >
          <div className="flex items-center py-4 pl-7">
            <button className="xl:hidden" onClick={handleBackClick}>
              <img src={back} alt="" />
            </button>
            <Avatar img={avatar2} imagewidth="48px" />
            <h2>Ayomide Gadgets</h2>
          </div>

          <div className="border-t-[1.2px] border-neutral-500 mt-4 flex items-center justify-center gap-1">
            <hr className="h-[1.2px] bg-neutral-500 w-64 " />
            <p className=" font-cabinetGrotesk font-semibold text-neutral-900">
              Today
            </p>
            <hr className="h-[1.5px] bg-neutral-500 w-64 " />
          </div>
          <div className="flex flex-col">
            <Receiving
              text="Lorem Ipsum is a dummy text sed erat sapien sapien quis tincidunt suspendisse. Sedaquat lacus, orci sed tortor ipsum ante tortorsis."
              time="10:24"
            />
            <Sending text="I've sent the payment" time="10.24" />
            <Sending
              text="Hope you have received the payment?"
              time="10.24"
              delivered={false}
            />
          </div>
          <MessageInput />
        </div>
      </main>
    </div>
  );
}

export default MessagesChat;
