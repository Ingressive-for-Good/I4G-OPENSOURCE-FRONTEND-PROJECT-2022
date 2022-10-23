function Avatar({ img, imagewidth }) {
  return (
    <div className="rounded-full w-[60px]">
      <img src={img} alt="user profile image" className={`w-[${imagewidth}]`} />
    </div>
  );
}

export default Avatar;
