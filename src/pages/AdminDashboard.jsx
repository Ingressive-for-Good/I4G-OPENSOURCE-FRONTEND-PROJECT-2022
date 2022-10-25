import React from "react";
import NavbarAdmin from "../components/molecules/NavbarAdmin";
import totalProductsIcon from "../assets/icons/total-products.svg";
import totalUsersIcon from "../assets/icons/total-users.svg";
import userAvatar from "../assets/icons/avatar.png";
import { productData } from "../assets/data/AdminDashboardData";
import { chart } from "../assets/data/AdminDashboardData";
import optionsIcon from "../assets/icons/optionsIcon.svg"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function AdminDashboard() {
    return (
        <div className="md:ml-[230px] md:mt-[40px]">
            <NavbarAdmin/>
            <div className="md:flex items-center justify-between">
                <div className="px-6 md:px-0">
                    {/* opening text */}
                    <div className="font-cabinetGrotesk ">
                        <p className="font-medium text-[20px]">Welcome Back, Admin👋🏾</p>
                        <h1 className="font-bold text-[28px]">Dashboard</h1>
                    </div>
                </div>
                {/* SEARCH BAR */}
                <div className="md:flex items-center">
                    <div className="flex gap-2 h-10 p-5 mx-6 my-4 border-2 hover:border-black rounded-md items-center ">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z" fill="#717591"/>
                            <path d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z" fill="#717591"/>
                        </svg>
                        <form action="">
                            <input className="font-cabinetGrotesk outline-none" type="text" placeholder="Search for gadgets" />
                        </form>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <div className=" bg-gray-300 rounded-full p-3">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z" fill="#717591"/>
                                <path d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z" fill="#717591"/>
                            </svg>
                        </div>
                        <img src={userAvatar} alt="user avatar" width={50}/>
                    </div>
                </div>
            </div>
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
                    Products
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#131418" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
            </div>
            {/* CONTAINER FOR THE CHART */}
            <div className="mt-10 font-cabinetGrotesk font-semibold w-[90%] mx-auto md:mx-0 h-[500px] md:w-[69%] py-6 bg-blue-100 rounded-md">
                <div className="flex justify-between items-center px-3 text-small text-blue-700">
                    <p className="flex items-center gap-1">
                        October 2022
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#131418" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </p>
                    <p className="flex items-center gap-1">
                        All days
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#131418" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </p>
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
                            {productData.map((products, index)=>{
                                return (
                                    <tr className="border-b-2 items-center">
                                        <td className="border-b px-2 py-4 flex gap-6 items-center">
                                            <img src={products.image} alt="avatar" />
                                            <div className="flex items-center gap-2  w-[100%] justify-between mr-6">
                                                <p>{products.discription}</p>
                                                <img className=" md:hidden" src={optionsIcon} alt="icon" />
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
                                                    <img src={optionsIcon} alt="icon" />
                                                </div>
                                            </td>
                                        </div>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
            </div>
            <div className="hidden fixed top-[180px] left-0 md:flex gap-3 bg-white p-4 items-center w-[230px]">
                <img className="ml-9" src="" alt="icon" />
                <p className=" font-cabinetGrotesk text-blue-700 font-semibold text-[18px]">Dashboard</p>
            </div>
        </div>
    )
}

export default AdminDashboard