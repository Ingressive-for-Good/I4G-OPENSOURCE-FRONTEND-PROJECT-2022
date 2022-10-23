import doubleTick from "../../assets/icons/doubleTick.svg";
import Avatar from "../atoms/Avatar";

function MessagePreview({ avatar, onClick }) {
    return (
      <div
        onClick={onClick}
        className="py-6 px-4 flex border-t-[1.2px] border-neutral-500"
      >
        <div>
          <Avatar img={avatar} imagewidth="48px" />
        </div>
  
        <div className="">
          <h3 className="font-campton text-sm font-medium">Ayomide Gadgets</h3>
          <div className="flex flex-wrap gap-2">
            <img src={doubleTick} alt="message delivered symbol" />
            <p className="font-campton text-sm text-neutral-700">
              I've sent the payments
            </p>
          </div>
        </div>
  
        <p className="ml-auto  text-right">10:24am</p>
      </div>
    );
  }

  export default MessagePreview;