import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import checkIcon from '../../../assets/icons/circular-check.png';
import DeleteProductModal from './DeleteProductModal';
import MakeProductUnavailable from './MakeProductUnavailable';
import ProductDetails from './ProductDetails';

export default function ProductPage() {
  const { isEmpty, uploadedProducts } = useSelector((state) => state.app);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSortByMenu, setShowSortByMenu] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [openDeleteProductModal, setDeleteProductModal] = useState(false);
  const [makeProductUnavailableModal, setMakeProductUnavailable] =
    useState(false);
  const [openProductDetails, setProductDetails] = useState(false);

  return (
    <>
      {isEmpty ? (
        <div className="w-full h-full flex items-center justify-center text-2xl font-medium">
          <p>No Product</p>
        </div>
      ) : (
        <section className="w-full max-h-[85vh] overflow-y-scroll border rounded-lg xlMax:mb-4 mt-24">
          <div className="w-full font-cabinetGrotesk py-4 border rounded-t-lg border-[#D5D5D5] px-5 bg-primary-50 flex items-center justify-between sticky top-0  z-[100]">
            <p className="font-bold text-neutral-900 text-2xl">
              Products ({uploadedProducts ? uploadedProducts.length : '0'})
            </p>
            <div className="relative">
              <div className="flex items-center font-campton">
                Sort By:{' '}
                <button
                  className="text-primary-500 flex ml-2 items-center"
                  onClick={() =>
                    setShowSortByMenu(showSortByMenu ? false : true)
                  }
                >
                  Latest{' '}
                  <span className="ml-2 mb-1">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#0F27BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div
                className={`${
                  showSortByMenu ? '' : 'hidden'
                } w-56 xl:w-72 rounded-lg absolute text-neutral-800  cursor-pointer z-[200] bg-white right-0 border  shadow-2xl font-campton border-neutral-500 p-6`}
              >
                <button className="whitespace-nowrap text-primary-500  flex justify-between w-full border-b border-neutral-500 pb-3">
                  <span>Latest</span>
                  <img src={checkIcon} alt="" />
                </button>
                <button className="whitespace-nowrap block text-start w-full border-b border-neutral-500 py-3">
                  Name
                </button>
                <button className="flex  justify-between items-center whitespace-nowrap w-full pt-4">
                  Category: All
                  <span className="ml-2 mb-1">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#131418"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {uploadedProducts?.length && (
            <table className="w-full relative bg-white">
              <thead className="sticky top-0 bg-white z-50">
                <tr className="border-b border-[#D5D5D5] w-full text-lg text-neutral-800 font-bold">
                  <th className="py-5 text-start pl-5">Item</th>
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
                    className="text-sm font-cabinetGrotesk xl:text-base border-b border-[#D5D5D5]"
                  >
                    <td className=" w-[25%] xl:w-[27%] pl-5  pr-5">
                      <div className="grid grid-cols-[40%_60%] xl:grid-cols-[30%_70%] text-neutral-900 font-bold items-center ">
                        <div
                          className="w-12 h-12 xl:w-16 xl:h-16 mr-3 rounded-xl bg-primary-50 "
                          style={{
                            backgroundImage: `url(${product.productImg} )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>

                        <p>{product.productName}</p>
                      </div>
                    </td>
                    <td className=" w-[18%]  font-medium text-neutral-700 xl:w-[18%]  pr-4 ">
                      {product.price}
                    </td>
                    <td className="w-[18%] xl:w-[20%] pr-4 break-all font-medium text-neutral-700">
                      {product.description}
                    </td>
                    <td className="w-[18%] xl:w-[20%] pr-4 font-medium text-neutral-700">
                      Johnson Clement
                    </td>
                    <td className="relative flex justify-between py-8  items-center pr-5 ">
                      <p className="font-medium text-neutral-700 ">
                        01/10/2022
                      </p>
                      <button
                        onClick={() => {
                          setShowProductMenu(
                            selectedProductId === product.id ? false : true
                          );
                          setSelectedProductId(
                            selectedProductId === product.id ? 0 : product.id
                          );
                        }}
                      >
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
                      <div
                        className={`${
                          showProductMenu && selectedProductId === product.id
                            ? ''
                            : 'hidden'
                        } w-56 xl:w-64 rounded-lg cursor-pointer absolute top-[40%] z-[200] bg-white right-7 border  shadow-2xl font-campton border-neutral-500 p-6`}
                      >
                        <button
                          onClick={() => {
                            setProductDetails(true);
                            setShowProductMenu(false);
                          }}
                          className="text-neutral-700 whitespace-nowrap block text-start w-full border-b border-neutral-500 pb-3"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            setMakeProductUnavailable(true);
                            setShowProductMenu(false);
                          }}
                          className="text-neutral-700 whitespace-nowrap block text-start w-full border-b border-neutral-500 py-3"
                        >
                          Make unavailable
                        </button>
                        <button
                          className="text-error-700 whitespace-nowrap block text-start w-full pt-3"
                          onClick={() => {
                            setDeleteProductModal(true);
                            setShowProductMenu(false);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <ProductDetails
            product={uploadedProducts.filter(
              (product) => product.id === selectedProductId
            )}
            open={openProductDetails}
            close={setProductDetails}
          />
          <DeleteProductModal
            open={openDeleteProductModal}
            close={setDeleteProductModal}
          />
          <MakeProductUnavailable
            open={makeProductUnavailableModal}
            close={setMakeProductUnavailable}
          />
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
