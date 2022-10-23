import React, { useState } from "react";

// This function handles the select dropdown on the dashboard page.

function DashboardSelect() {
  // the logic below handels the opening and closing of the SORT dropdown for the select popup on the dashboard page page.
  const [showSort, setShowSort] = useState(false);

  let sortDiv;

  if (showSort) {
    sortDiv = (
      <div>
        <div className="flex gap-2 p-2 items-center border-b border-t-2 m-2">
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.104 0.954901C15.2063 0.85045 15.3285 0.767472 15.4634 0.710825C15.5982 0.654178 15.743 0.625 15.8892 0.625C16.0355 0.625 16.1803 0.654178 16.3151 0.710825C16.4499 0.767472 16.5721 0.85045 16.6745 0.954901C17.1035 1.3884 17.1095 2.0889 16.6895 2.5299L7.81997 13.0149C7.71927 13.1255 7.59707 13.2144 7.46084 13.2761C7.32461 13.3378 7.17722 13.3711 7.02768 13.3739C6.87814 13.3767 6.72961 13.349 6.59116 13.2924C6.45271 13.2358 6.32725 13.1516 6.22247 13.0449L0.82547 7.5759C0.617326 7.36363 0.500732 7.07819 0.500732 6.7809C0.500732 6.48361 0.617326 6.19817 0.82547 5.9859C0.927839 5.88145 1.05002 5.79847 1.18485 5.74182C1.31969 5.68518 1.46447 5.656 1.61072 5.656C1.75697 5.656 1.90175 5.68518 2.03659 5.74182C2.17142 5.79847 2.2936 5.88145 2.39597 5.9859L6.97397 10.6254L15.074 0.987901C15.0833 0.976309 15.0933 0.965289 15.104 0.954901Z"
              fill="#4B4E61"
            />
          </svg>
          <p>Name</p>
        </div>
        <div className="flex justify-between p-2 items-center border-b m-2">
          <p>Item Category</p>
        </div>
        <div className="flex justify-between p-2 items-center border-b m-2">
          <p>Size</p>
        </div>
        <div className="flex justify-between p-2 items-center m-2">
          <p>Date Added</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border bg-white rounded-md w-[250px] mt-1 md:w-[296px] absolute right-7">
      <div className="flex p-2 items-center justify-between border-b m-2">
        <p>Select</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3829 8.27344H15.2836C15.0446 8.27344 14.8172 8.38828 14.6766 8.58516L10.9922 13.6945L9.32349 11.3789C9.18286 11.1844 8.95786 11.0672 8.71646 11.0672H7.61724C7.4649 11.0672 7.37583 11.2406 7.4649 11.3648L10.3852 15.4148C10.4542 15.5111 10.5451 15.5896 10.6505 15.6437C10.7559 15.6978 10.8726 15.7261 10.9911 15.7261C11.1095 15.7261 11.2263 15.6978 11.3316 15.6437C11.437 15.5896 11.5279 15.5111 11.5969 15.4148L16.5329 8.57109C16.6243 8.44688 16.5352 8.27344 16.3829 8.27344Z"
            fill="#4B4E61"
          />
          <path
            d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
            fill="#4B4E61"
          />
          <rect
            x="0.0390625"
            y="0.0390625"
            width="23.9219"
            height="23.9219"
            stroke="#4B4E61"
            stroke-width="0.078125"
          />
        </svg>
      </div>
      <div className="flex justify-between p-2 items-center m-2">
        <p>Sort By</p>
        <svg
          onClick={() => setShowSort(!showSort)}
          width="15"
          height="8"
          viewBox="0 0 15 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1L7.5 7L13.5 1"
            stroke="#4B4E61"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>{sortDiv}</div>
    </div>
  );
}

export default DashboardSelect;
