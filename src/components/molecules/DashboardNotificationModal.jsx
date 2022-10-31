import React from "react";

export const DashboardNotificationDialog = ({
  open,
  setNotificationDialog,
}) => {
  return (
    <div
      className={`hidden   z-10 md:ml-[90px] md:mr-1 lg:ml-0 lg:mr-3 z-[99] ${
        open ? " md:block " : " md:hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition transition-opacity duration-300 "
        onClick={() => {
          setNotificationDialog(!open);
        }}
      ></div>

      <div className="flex transition  duration-250 items-end  justify-end text-center sm:items-center sm:p-0 ">
        <div className="px-2 pb-2 pt-6 bg-white z-10 notification_clip-path">
          <div className="relative h-[250px] border-gray-200 border-solid border-[2.5px]  transform overflow-hidden rounded-lg bg-white text-left   transition-all   sm:w-full sm:max-w-lg">
            <div className=" py-1 ">
              <div className=" sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-7 text-gray-800"
                    id="modal-title"
                  >
                    Notifications
                  </h3>
                  <div className="mt-5 h-full w-3/4 m-auto text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-bell-slash"
                      viewBox="0 0 16 16"
                      className="m-auto mb-5  text-gray-300 w-1/3 "
                    >
                      <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6 0-.264-.02-.523-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164l-1 1zm5.581-9.91a3.986 3.986 0 0 0-1.948-1.01L8 2.917l-.797.161A4.002 4.002 0 0 0 4 7c0 .628-.134 2.197-.459 3.742-.05.238-.105.479-.166.718l-1.653 1.653c.02-.037.04-.074.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284l-.707.707zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                    </svg>
                    <p className="text-sm leading-4  text-gray-500">
                      You have no notification right now, come back later!
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
