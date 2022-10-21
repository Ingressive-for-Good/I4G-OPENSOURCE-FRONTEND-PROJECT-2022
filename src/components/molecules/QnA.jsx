import { useState } from "react";
import chevronUp from '../../assets/icons/chevronUp.svg';
import chevronDown from '../../assets/icons/chevronDown.svg';

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
          <p className="font-campton p-4 md:pr-5 md:text-lg border-b border-neutral-300">{answer}</p>
        )}
      </div>
    );
  }

  export default QnA;