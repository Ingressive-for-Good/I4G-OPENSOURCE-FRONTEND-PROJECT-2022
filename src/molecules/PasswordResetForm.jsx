import React from "react";
import SubmitButton from "../atoms/Button/SubmitButton";

function PasswordResetForm() {
    return(
        <div className="p-6">
            <form action="">
              <small>New Password</small><br/>
              <input type="password" placeholder="Set an 8-character password" className="p-3 w-full border-2 rounded-md"/><br/>
              <small>Confirm Password</small><br/>
              <input type="password" placeholder="Enter the password again" className="p-3 w-full border-2 rounded-md"/><br/>
            </form>
            <SubmitButton />
        </div>
    )
}

export default PasswordResetForm;