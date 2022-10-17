import React, { useState } from "react";

import nav from "../../assets/icons/Vector2.png";
import { UseAppContext } from "../../../utils/context";
const HandleButton = () => {
  const [show, setShow] = useState(false);
  const { setAlert, setMessage, setPopUp, alert } = UseAppContext();
  function addItem() {
    setShow(!show);
  }
  const markAvailable = () => {
    setAlert(!alert);
    setMessage(" Success! An item has been marked as available");
    setPopUp(true);
    setShow(false);
  };
  return (
    <div>
      <img
        src={nav}
        alt=""
        srcset=""
        onClick={addItem}
        className="absolute top-4 right-6 bg-primary-50 h-10 w-10 object-contain p-2 rounded-full"
      />
      {show ? (
        <>
          <div className=" absolute bg-neutral-50 top-16 right-2 p-2 rounded-md text-small text-center leading-5 ">
            <ul>
              <li className="p-2">Edit Details</li>
              <li onClick={markAvailable}>Mark as Available</li>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default HandleButton;
