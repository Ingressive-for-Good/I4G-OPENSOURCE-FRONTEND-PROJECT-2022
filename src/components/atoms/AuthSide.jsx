export default function AuthSide({ Main }) {
  return (
    <div className="hidden md:block w-[550px] relative bg-primary-50   md:px-[7%]">
      <div className="mt-[200px]">
        <img src={Main} alt="Main Image" className="mt-24" />
      </div>
      <p className="text-neutral-600 text-center leading-8 lg:mt-8">
        Verify your email address to stay protected and get the best deals.
      </p>
    </div>
  );
}
