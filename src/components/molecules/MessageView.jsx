import NotDelivered from "../atoms/NotDelivered";

function Receiving({ text, time }) {
    return (
      <div
        className={
          "border-neutral-500 border pt-4 px-4 pb-2 gap-1 text-sm rounded-t-lg flex flex-col w-[48%] ml-4 mt-4 bg-white self-start rounded-br-lg"
        }
      >
        <p>{text}</p>
        <p className="self-end">{time}</p>
      </div>
    );
  }
  
  function Sending({ text, time, delivered = true }) {
    return (
      <div className="mt-4 mr-4 self-end w-[48%]">
        <div
          className={
            " text-white rounded-bl-lg  border pt-4 px-4 pb-2 gap-1 text-sm rounded-t-lg flex flex-col  bg-primary-500 "
          }
        >
          <p>{text}</p>
          {delivered && <p className="self-end">{time}</p>}
        </div>
  
        {!delivered && <NotDelivered />}
      </div>
    );
  }

  export {Sending, Receiving};