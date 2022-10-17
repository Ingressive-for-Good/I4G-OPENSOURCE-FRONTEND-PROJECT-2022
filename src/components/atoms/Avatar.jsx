function Avatar({ img }) {
  return (
    <div className="rounded-full">
      <img src={img} alt="user profile image" />
    </div>
  );
}

export default Avatar;
