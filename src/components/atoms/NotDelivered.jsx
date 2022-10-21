import warning from "../../assets/icons/warning.svg";

function NotDelivered() {
    return (
      <div className="flex text-sm mt-2 font-medium items-center px-1">
        <img src={warning} alt="" />
        <p className="text-error-500 ml-2">Message not delivered</p>
        <button className="text-primary-500 text-left ml-auto">Retry</button>
      </div>
    );
  }

  export default NotDelivered;