import attach from "../../assets/icons/attach.svg";
import send from "../../assets/icons/send.svg";
import emoji from "../../assets/icons/emoji.svg";

function MessageInput() {
  return (
    <form className="absolute bottom-8 w-full px-4">
      <input
        type="text"
        placeholder="Type a message and press enter to send"
        className="w-full h-14 rounded-lg placeholder:text-sm pl-16 pr-16"
      />
      <img src={emoji} alt="" className="absolute top-4 left-9" />
      <img src={attach} alt="" className="absolute top-4 right-16" />
      <button type="submit">
        <img src={send} alt="" className="absolute top-4 right-7" />
      </button>
    </form>
  );
}

export default MessageInput;