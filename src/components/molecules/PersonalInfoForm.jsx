import React from "react";

export default function SubAdminPersonalInfoForm() {
    return (
        <div className="font-campton">
            <p className=" text-blue-800 text-[18px]">Personal Information</p>
            <form action="" className="md:flex justify-between">
                <div className=" w-full mr-6">
                    <p>Name</p>
                    <input type="text" placeholder="Enter name" className="p-3 border-2 rounded-md w-full"/>
                </div>
                <div className="w-full mt-6 md:mt-0">
                    <p>Email Address</p>
                    <input type="email" placeholder="Enter email address" className="p-3 border-2 rounded-md w-full"/>
                </div>
                
            </form>
        </div>
    )
}