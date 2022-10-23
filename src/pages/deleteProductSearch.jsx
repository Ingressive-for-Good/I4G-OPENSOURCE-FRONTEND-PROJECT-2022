import React from "react";
import Hero from "../components/molecules/delete-dashboard-hero-section";
import Sidebar from "../components/molecules/sideNav";
import DashboardProduct from "../components/molecules/dashboardProduct";
const DeleteProductSearch = () => {
  return (
    <div className="relative h-screen">
      <div className="py-8 px-5 w-screen md:py-10 md:px-14 lg:flex lg:gap-8 relative lg:pl-0 lg:pt-0 lg:pr-10">
        <Sidebar />
        <div>
          <Hero />
          <DashboardProduct />
        </div>
      </div>
    </div>
  );
};

export default DeleteProductSearch;
