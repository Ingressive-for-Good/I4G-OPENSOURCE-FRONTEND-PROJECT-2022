import React from "react";
import { Link } from "react-router-dom";
function ProceedToLoginButton() {
    return (
        <div>
            <Link to="/login">
                <button className="bg-primary-600 text-white p-3 w-[230px] mt-6 border rounded-md">
                    Proceed to Log In
                </button>
            </Link> 
        </div>
    )
}

export default ProceedToLoginButton;