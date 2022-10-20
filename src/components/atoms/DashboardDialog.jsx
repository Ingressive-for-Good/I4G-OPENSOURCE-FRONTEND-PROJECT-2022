import React from "react";
import Notification from "./Notification";

export const DashboardNotificationDialog = ({
  open,
  setNotificationDialog,
}) => {
  return (
    <div
      className={`hidden   absolute z-10 mr-3 z-[99] ${
        open ? " md:block" : " md:hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity  "
        onClick={() => {
          setNotificationDialog(!open);
        }}
      ></div>

      <div className="flex items-end  justify-end p-1 text-center sm:items-center sm:p-0 ">
        <div className="   px-2 pb-2 pt-4 bg-white z-10 notification_clip-path">
          <div className="relative border-gray-200 border-solid border-[2.5px]  transform overflow-hidden rounded-lg bg-white text-left   transition-all   sm:w-full sm:max-w-lg">
            <div className="  px-1 py-2    ">
              <div className=" sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    NOTIFICATION
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Notification messages will appear here. Implementation is
                      in progress...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
