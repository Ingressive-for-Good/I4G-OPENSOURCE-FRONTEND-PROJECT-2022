import React from "react";

export default function SubAdminCreatePassword() {
    return (
        <div className="font-campton">
            <p className=" text-blue-800 text-[18px]">Create Password</p>
            <form action="" className="md:flex justify-between">
                <div className="w-full mr-6">
                    <p>Password</p>
                    <input type="password" placeholder="Enter password" className="p-3 border-2 rounded-md w-full"/>
                </div>
                <div className="w-full mt-6 md:mt-0">
                    <p>Confirm Password</p>
                    <input type="password" placeholder="Confirm password" className="p-3 border-2 rounded-md w-full"/>
                </div>
            </form>
        </div>
    )
}