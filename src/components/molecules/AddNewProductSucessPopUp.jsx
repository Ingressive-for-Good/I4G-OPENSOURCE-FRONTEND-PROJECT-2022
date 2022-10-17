import SuccessEmoji from '../../assets/icons/success.svg';

export default function AddNewProductSucessPopUp({ handleClick }) {
  return (
    <div className=" flex items-center fixed bg-none top-0 left-0 h-full w-screen z-50 overflow-hidden ">
      <div className="bg-white opacity-[1] w-[90%] sm:w-[80%] lg:w-[70%] max-w-[590px]  p-[30px] sm:p-[47px] mx-auto font-campton rounded-[8px]">
        <div className="flex flex-col items-center justify-center text-center ">
          <h1 className="font-cabinetGrotesk sm:text-[30px] text-[25px] font-[700] text-success-500">
            Product Update Successful
          </h1>
          <img src={SuccessEmoji} alt="sucess" />
          <p className="font-[500px] max-w-[350px] mt-[32px]">
            {' '}
            <span className="font-[700]">Congratulations!</span> Your product
            has been successfully uploaded😊
          </p>
          <div className="flex sm:flex-row flex-col justify-between w-full mt-[32px] gap-[15px]">
            <button
              onClick={handleClick}
              className=" border-primary-500 py-[18px] border-[2px] w-[100%] sm:w-[45%] text-center rounded-[8px] font-[700] text-primary-500"
            >
              Go to dashboard
            </button>
            <button
              onClick={handleClick}
              className=" border-primary-500 py-[18px] border-[2px] w-[100%] sm:w-[45%] text-center rounded-[8px] font-[700] text-white bg-primary-500"
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
