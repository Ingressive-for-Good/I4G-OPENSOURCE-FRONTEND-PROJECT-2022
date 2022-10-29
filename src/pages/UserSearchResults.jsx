import React, { useState } from "react";
import NavbarAdmin from "../components/molecules/NavbarAdmin";
import { userData } from "../assets/data/AdminDashboardData";
import optionsIcon from "../assets/icons/optionsIcon.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import dashboardIcon from "../assets/icons/dashboard-blue.svg"
import AdminTopGreeting from "../components/molecules/AdminTopGreeting";
import AdminSortByDropdown from "../components/molecules/AdminSortByDropdown";


function UserSearchResults() {
    
    const [showSort, setShowSort] = useState(false)

    let sort

    if(showSort){
        sort = <AdminSortByDropdown/>
    }

    function showMores() {
        var el = document.getElementById("more");
        if (el.style.display === "none"){
            el.style.display = "block"
        } else {
            el.style.display = "none"
        }
    }

    return(
        <div className="md:ml-[270px] md:mt-[40px] md:mr-6">
            <NavbarAdmin/>
            <AdminTopGreeting/>
            {/* TABLE */}
            <div className="font-cabinetGrotesk border-2 border-collapse rounded-lg w-[90%] md:w-[100%] mt-16 mx-auto md:mx-0 text-center">
                <div className="flex items-center justify-between px-6 py-4 bg-blue-50">
                    <p className=" font-bold text-[18px]">24 Result(s)</p>
                    <p className="flex items-center gap-2">
                        Sort by: <span className=" text-blue-700">Latest</span><img onClick={() => setShowSort(!showSort)} src={chevronDown} alt="" />
                    </p>
                </div>
                <div className="absolute right-6 top-[350px] md:top-[230px]">
                    {sort}
                </div>
                <table className="w-[100%]">
                        <tr className="border-b-2 rounded-t-lg">
                            <th className="text-left px-2 py-4">Name</th>
                            <div className="hidden md:contents">
                                <th className="px-2 py-4">Email Address</th>
                                <th className="px-2 py-4">Phone Number</th>
                            </div>
                            <div className="hidden lg:contents">
                                <th className="px-2 py-4">Date Registered</th>
                            </div>
                        </tr>
                        {userData.map((user)=>{
                            return (
                                <tr key={user.id} className="border-b-2 items-center">
                                    <td className="border-b px-2 py-4 flex gap-6 items-center">
                                        <img src={user.image} alt="avatar" />
                                        <div className="flex items-center gap-2  w-[100%] justify-between mr-6">
                                            <p>{user.name}</p>
                                            <img onClick={() => showMores()} className="md:hidden" src={optionsIcon} alt="icon" />
                                        </div>
                                    </td>
                                    <div className="hidden md:contents">
                                        <td className="px-2 relative bottom-5">
                                            <p className="text-gray-600">{user.email}</p>
                                        </td>
                                        <td className="px-2 relative bottom-5">
                                            <p className="text-gray-600">{user.phone}</p>
                                        </td>
                                    </div>
                                    <div className="hidden lg:contents">
                                        <td className="px-2 relative bottom-5">
                                            <div className="flex items-center justify-between mr-4">
                                                <p className="text-gray-600">{user.registered}</p>
                                                <img onClick={() => showMores()} src={optionsIcon} alt="icon" />
                                            </div>
                                        </td>
                                        <td>
                                            <div id="more" className="hidden absolute right-20 mt-6">
                                                <p className="bg-white p-4 border rounded-md">View Profile</p>
                                            </div>
                                        </td>
                                    </div>
                                </tr>
                            )
                        })}
                        
                </table>
            </div>
            
            <div className="flex items-center justify-between px-6 md:px-0 mt-10 mb-10">
                <p>Showing 7 of 24 results</p>
                <p className="flex items-center gap-3">
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.06167 4.869C1.11833 4.811 1.33228 4.563 1.53158 4.359C2.7 3.076 5.74807 0.976 7.34342 0.335C7.5857 0.232 8.19824 0.014 8.52552 0C8.83912 0 9.13806 0.072 9.42333 0.218C9.77894 0.422 10.0642 0.743 10.2205 1.122C10.3211 1.385 10.4775 2.172 10.4775 2.186C10.6338 3.047 10.7197 4.446 10.7197 5.992C10.7197 7.465 10.6338 8.807 10.5058 9.681C10.4911 9.695 10.3348 10.673 10.1639 11.008C9.85025 11.62 9.23771 12 8.58218 12H8.52552C8.09859 11.985 7.20078 11.605 7.20078 11.591C5.6914 10.949 2.71368 8.952 1.51692 7.625C1.51692 7.625 1.17988 7.284 1.03334 7.071C0.804732 6.765 0.691406 6.386 0.691406 6.007C0.691406 5.584 0.819386 5.19 1.06167 4.869Z" fill="#252730"/>
                    </svg>
                    <span className=" bg-blue-700 p-2 rounded-md text-white">01</span>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6092 7.131C10.5526 7.189 10.3386 7.437 10.1393 7.641C8.9709 8.924 5.92284 11.024 4.32749 11.665C4.08521 11.768 3.47266 11.986 3.14539 12C2.83179 12 2.53284 11.928 2.24758 11.782C1.89197 11.578 1.6067 11.257 1.45039 10.878C1.34976 10.615 1.19345 9.828 1.19345 9.814C1.03714 8.953 0.951172 7.554 0.951172 6.008C0.951172 4.535 1.03714 3.193 1.16512 2.319C1.17978 2.305 1.33609 1.327 1.50705 0.992C1.82065 0.38 2.4332 0 3.08872 0H3.14539C3.57231 0.015 4.47012 0.395 4.47012 0.409C5.9795 1.051 8.95723 3.048 10.154 4.375C10.154 4.375 10.491 4.716 10.6376 4.929C10.8662 5.235 10.9795 5.614 10.9795 5.993C10.9795 6.416 10.8515 6.81 10.6092 7.131Z" fill="#252730"/>
                    </svg>
                </p>
            </div>
            <div className="hidden fixed top-[180px] left-0 md:flex gap-3 bg-white p-4 items-center w-[230px]">
                <img className="ml-9" src={dashboardIcon} alt="icon" />
                <p className=" font-cabinetGrotesk text-blue-700 font-semibold text-[18px]">Dashboard</p>
            </div>
        </div>
    )
}

export default UserSearchResults;