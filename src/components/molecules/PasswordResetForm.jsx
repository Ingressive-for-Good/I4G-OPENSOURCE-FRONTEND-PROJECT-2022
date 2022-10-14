import React from "react";
import SubmitButton from "../atoms/Button/SubmitButton";

function PasswordResetForm() {
    return(
        <div className="px-6 pt-6">
            <form action="">
              <small className="font-campton">New Password</small><br/>
              <div className="flex w-full border-2 rounded-md justify-between">
                <input type="password" placeholder="Set an 8-character password" className="p-3 w-full" /><br/>
                <img src="../src/assets/images/HideIcon.png" alt=""/>
              </div>
              <small className="font-campton">Confirm Password</small><br/>
              <input type="password" placeholder="Enter the password again" className="p-3 w-full border-2 rounded-md"/><br/>
            </form>
            <div className="gap-2 h-10 p-2 border rounded-md items-center flex">
                

            </div>
        </div>
    )
}

export default PasswordResetForm;