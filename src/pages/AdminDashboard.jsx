import React, { useState } from "react";
import NavbarAdmin from "../components/molecules/NavbarAdmin";
import totalProductsIcon from "../assets/icons/total-products.svg";
import totalUsersIcon from "../assets/icons/total-users.svg";
import userAvatar from "../assets/icons/avatar.png";
import { productData } from "../assets/data/AdminDashboardData";
import { chart } from "../assets/data/AdminDashboardData";
import optionsIcon from "../assets/icons/optionsIcon.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import dashboardIcon from "../assets/icons/dashboard-blue.svg";
import AdminMoreOptions from "../components/molecules/AdminMoreOptions";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AdminTopGreeting from "../components/molecules/AdminTopGreeting";
import AdminDaysDropdown from "../components/molecules/AdminDaysDropdown";
import AdminMonthsDropdown from "../components/molecules/AdminMonthsDropdown";
import AdminAnalyticsDropdown from "../components/molecules/AdminAnalyticsDropdown";


function AdminDashboard() {

    const [showDays, setShowDays] = useState(false)
    const [showMonths, setShowMonths] = useState(false)
    const [showAnalytics, setShowAnalytics] = useState(false)

    let daysDropdown
    let monthsDropdown
    let analytics

    if(showDays){
        daysDropdown = <AdminDaysDropdown/>
    }

    if(showMonths){
        monthsDropdown = <AdminMonthsDropdown/>
    }

    if(showAnalytics){
        analytics = <AdminAnalyticsDropdown/>
    }

    function showMores() {
        var el = document.getElementById("more");
        if (el.style.display === "none"){
            el.style.display = "block"
        } else {
            el.style.display = "none"
        }
    }

    return (
        <div className="md:ml-[270px] md:mt-[40px] md:mr-6">
            <NavbarAdmin/>
            <AdminTopGreeting/>
            <div className="flex justify-between items-center px-6 md:px-0 my-8">
                <p className=" font-cabinetGrotesk text-[18px] font-semibold">Statistics</p>
                <p className="flex items-center gap-2 text-small text-blue-700">
                    Today 7th October 2022
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#131418" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
            </div>
            <div className="px-6 md:px-0 my-4 flex flex-wrap justify-between">
                <div className="flex flex-col md:flex-row gap-5">
                    {/* TOTAL PRODUCTS */}
                    <div className="flex w-[300px] sm:w-[260px] md:w-[300px] lg:w-[350px] h-fit font-cabinetGrotesk gap-3 justify-between p-5 border items-start rounded-md bg-blue-100">
                        <img src={totalProductsIcon} alt="icon" />
                        <div className="font-semibold">
                            <p className="text-[15px]">Total Products</p>
                            <p className="text-[20px] mt-5">150,000</p>
                        </div>
                        <div className="flex mt-12 text-[12px] items-center gap-1 bg-blue-50 rounded-md text-green-600">
                            +50%
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3202 13.0296L15.3202 7.30679L9.59736 7.30679" stroke="#0FBD3B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.3065 15.3206L15.2402 7.3869" stroke="#0FBD3B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    {/* TOTAL USERS */}
                    <div className="flex w-[300px] sm:w-[260px] lg:w-[350px] h-fit font-cabinetGrotesk justify-between p-5 border items-start rounded-md bg-blue-100">
                        <img src={totalUsersIcon} alt="icon" />
                        <div className="font-semibold">
                            <p className="text-[15px]">Total Users</p>
                            <p className="text-[20px] mt-5">111,500</p>
                        </div>
                        <div className="flex mt-12 text-[12px] items-center gap-1 bg-blue-50 rounded-md text-red-600">
                            -50%
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3202 9.5978L15.3202 15.3207L9.59736 15.3207" stroke="#D41111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.3065 7.3068L15.2402 15.2405" stroke="#D41111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                    {/* TABLE */}
                <div className="lg:absolute md:right-8 mt-8 sm:mt-0 border-2 rounded-lg border-collapse">
                    <table className="w-[240px] md:w-[300px]">
                        <tr>
                            <th className="bg-blue-50 border-b rounded-t-lg text-left px-2 py-4">Top Users</th>
                        </tr>
                        <tr>
                            <td className="border-b px-2 py-4 flex gap-2 items-center">
                                <img src={userAvatar} alt="avatar" />
                                <div>
                                <p>Alfreds Futterkiste</p>
                                <p>1000 products</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b px-2 py-4 flex gap-2 items-center">
                                <img src={userAvatar} alt="avatar" />
                                <div>
                                <p>Alfreds Futterkiste</p>
                                <p>1000 products</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b px-2 py-4 flex gap-2 items-center">
                                <img src={userAvatar} alt="avatar" />
                                <div>
                                <p>Alfreds Futterkiste</p>
                                <p>1000 products</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="flex gap-3 items-center px-6 md:px-0">
                <p className=" font-cabinetGrotesk text-[18px] font-semibold">Analytics:</p>
                <p className="flex items-center gap-2 text-small text-blue-700">
                    Products <img onClick={() => setShowAnalytics(!showAnalytics)} src={chevronDown} alt="" />
                </p>
            </div>
            <div className="absolute left-28 md:left-[340px] top-[990px] z-10 md:top-[380px]">
                {analytics}
            </div>
            {/* CONTAINER FOR THE CHART */}
            <div className="mt-10 font-cabinetGrotesk font-semibold w-[90%] mx-auto md:mx-0 h-[500px] md:w-[69%] py-6 bg-blue-100 rounded-md">
                <div className="flex justify-between items-center px-3 text-small text-blue-700">
                    <p className="flex items-center gap-1">
                        October 2022 <img onClick={() => setShowMonths(!showMonths)} src={chevronDown} alt="" />
                    </p>
                    <p className="flex items-center gap-1">
                        All days <img onClick={() => setShowDays(!showDays)} src={chevronDown} alt="" />
                    </p>
                </div>
                <div className="absolute right-10 md:right-[370px] top-[1080px] z-10 md:top-[470px]">
                    {daysDropdown}
                </div>
                <div className="absolute top-[1080px] z-10 md:top-[470px]">
                    {monthsDropdown}
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                    width={700}
                    height={300}
                    data={chart}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 35,
                    }}
                    >
                    <CartesianGrid strokeDasharray="5" horizontal="true" vertical=""/>
                    <XAxis dataKey="name" tickLine={false} padding={{ top: 50, bottom: 50 }}/>
                    <YAxis tickCount={6} axisLine={false} tickLine={false} type="number" domain={[0, 'dataMax + 3250']}/>
                    <Tooltip contentStyle={{ width: 200, backgroundColor: '#1434A4', color: "#fff" }} itemStyle={{ color: "#fff"}} cursor={{ strokeWidth: "2" , stroke: "blue", strokeDasharray:"5" }}  />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="Products" stroke="#8884d8" strokeWidth={3} dot={false} activeDot={{ r : 8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* RECENT UPLOADED PRODUCTS */}
            <div className="mt-6 font-cabinetGrotesk mb-36">
                <p className="font-semibold px-6 md:px-0 py-6">Recent Uploaded Products</p>
                <div className="border-2 border-collapse rounded-lg w-[90%] md:w-[100%] mx-auto md:mx-0 text-center">
                    <table className="w-[100%]">
                            <tr className="border-b-2 bg-blue-50 rounded-t-lg">
                                <th className="text-left px-2 py-4">Item(s)</th>
                                <div className="hidden md:contents">
                                    <th className="px-2 py-4">Price</th>
                                    <th className="px-2 py-4">Category</th>
                                </div>
                                <div className="hidden lg:contents">
                                    <th className="px-2 py-4">User</th>
                                    <th className="px-2 py-4">Date Uploaded</th>
                                </div>
                            </tr>
                            {productData.map((products)=>{
                                return (
                                    <tr key={products.id} className="border-b-2 items-center">
                                        <td className="border-b px-2 py-4 flex gap-6 items-center">
                                            <img src={products.image} alt="avatar" />
                                            <div className="flex items-center gap-2  w-[100%] justify-between mr-6">
                                                <p>{products.discription}</p>
                                                <img onClick={() => showMores()} className=" md:hidden" src={optionsIcon} alt="icon" />
                                            </div>
                                        </td>
                                        <div className="hidden md:contents">
                                            <td className="px-2 relative bottom-5">
                                                <p className="text-gray-600">{products.price}</p>
                                            </td>
                                            <td className="px-2 relative bottom-5">
                                                <p className="text-gray-600">{products.category}</p>
                                            </td>
                                        </div>
                                        <div className="hidden lg:contents">
                                            <td className="px-2 relative bottom-5">
                                                <p className="text-gray-600">{products.user}</p>
                                            </td>
                                            <td className="px-2 relative bottom-5">
                                                <div className="flex items-center justify-between mr-4">
                                                    <p className="text-gray-600">{products.uploaded}</p>
                                                    <img onClick={() => showMores()} src={optionsIcon} alt="icon" />
                                                </div>
                                            </td>
                                            <td>
                                                <div id="more" className="hidden absolute right-20 z-20"><AdminMoreOptions /></div>
                                            </td>
                                        </div>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
            </div>
            <div className="hidden fixed top-[180px] left-0 md:flex gap-3 bg-white p-4 items-center w-[230px]">
                <img className="ml-9" src={dashboardIcon} alt="icon" />
                <p className=" font-cabinetGrotesk text-blue-700 font-semibold text-[18px]">Dashboard</p>
            </div>
        </div>
    )
}

export default AdminDashboard