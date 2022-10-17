import React from 'react';
import { useSelector } from 'react-redux';

export default function AdminProductPage() {
  const { isEmpty, uploadedProducts } = useSelector((state) => state.app);
  return (
    <>
      {isEmpty ? (
        <p>No Product</p>
      ) : (
        <section className="w-full  overflow-y-scroll border rounded-2xl xlMax:mb-4 mt-24">
          <div className="w-full font-cabinetGrotesk py-4 border border-[#D5D5D5] px-3 xl:px-5 bg-primary-50 flex justify-between sticky top-0  z-50">
            <p className="font-bold text-[#131418] text-2xl">
              Products ({uploadedProducts ? uploadedProducts.length : '0'})
            </p>
            <div>Sort By</div>
          </div>
          <section className=" w-full  bg-white overflow-y-hidden">
            {uploadedProducts?.length && (
              <table className="w-full relative bg-white">
                <thead className="sticky top-0 bg-white z-50">
                  <tr className="border-b border-[#D5D5D5] w-full text-lg text-[#252730] font-bold">
                    <th className="py-5 text-start pl-3 xl:pl-5">Item</th>
                    <th className="text-start">Price</th>
                    <th className="text-start">Category</th>
                    <th className="text-start">User</th>
                    <th className="text-start">Date Uploaded</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedProducts?.map((product) => (
                    <tr
                      key={product.id}
                      className="text-xs font-cabinetGrotesk xl:text-sm border-b  border-[#D5D5D5]"
                    >
                      <td className=" w-[20%] xl:w-[25%] pl-3 xl:pl-5 py-6 pr-3">
                        <div className="flex text-[#131418] font-bold items-center ">
                          <div
                            className="w-8 h-8 xl:w-12 xl:h-12 mr-3 rounded-xl bg-primary-50 "
                            style={{
                              backgroundImage: `url(${product.productImg} )`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          ></div>
                          {product.productName}
                        </div>
                      </td>
                      <td className=" w-[18%] font-medium text-[#4B4E61] xl:w-[18%]  pr-4 break-all">
                        {product.price}
                      </td>
                      <td className="w-[18%] xl:w-[20%] pr-4 break-all font-medium text-[#4B4E61]">
                        {product.description}
                      </td>
                      <td className="w-[18%] xl:w-[20%] pr-4 font-medium text-[#4B4E61]">
                        Johnson Clement
                      </td>
                      <td className="flex justify-between items-center pr-3 xl:pr-5">
                        <p className="font-medium text-[#4B4E61]">01/10/2022</p>
                        <button>
                          <svg
                            width="5"
                            height="20"
                            viewBox="0 0 5 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 2.79481C5 2.19962 4.76295 1.62881 4.34099 1.20795C3.91903 0.787086 3.34674 0.55065 2.75 0.55065C2.15326 0.55065 1.58097 0.787086 1.15901 1.20795C0.737053 1.62881 0.5 2.19962 0.5 2.79481C0.5 3.38999 0.737053 3.9608 1.15901 4.38166C1.58097 4.80252 2.15326 5.03896 2.75 5.03896C3.34674 5.03896 3.91903 4.80252 4.34099 4.38166C4.76295 3.9608 5 3.38999 5 2.79481ZM5 10.2753C5 9.68014 4.76295 9.10933 4.34099 8.68847C3.91903 8.26761 3.34674 8.03117 2.75 8.03117C2.15326 8.03117 1.58097 8.26761 1.15901 8.68847C0.737053 9.10933 0.5 9.68014 0.5 10.2753C0.5 10.8705 0.737053 11.4413 1.15901 11.8622C1.58097 12.283 2.15326 12.5195 2.75 12.5195C3.34674 12.5195 3.91903 12.283 4.34099 11.8622C4.76295 11.4413 5 10.8705 5 10.2753ZM5 17.7558C5 17.1607 4.76295 16.5898 4.34099 16.169C3.91903 15.7481 3.34674 15.5117 2.75 15.5117C2.15326 15.5117 1.58097 15.7481 1.15901 16.169C0.737053 16.5898 0.5 17.1607 0.5 17.7558C0.5 18.351 0.737053 18.9218 1.15901 19.3427C1.58097 19.7636 2.15326 20 2.75 20C3.34674 20 3.91903 19.7636 4.34099 19.3427C4.76295 18.9218 5 18.351 5 17.7558Z"
                              fill="#071255"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </section>
      )}
      <style>
        {`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -ms-overflow-style: none;
            /* Internet Explorer 10+ */
            scrollbar-width: none;
            scroll-behavior: smooth;
            /* Firefox */
          }
          
          *::-webkit-scrollbar {
            display: none;
            /* Safari and Chrome */
          }
        `}
      </style>
    </>
  );
}
