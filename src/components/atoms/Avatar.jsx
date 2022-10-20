function Avatar({ img }) {
  return (
    <div className="rounded-full w-[60px]">
      <img src={img} alt="user profile image" className="w-[60px]" />
    </div>
  );
}

export default Avatar;
