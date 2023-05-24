import Image from "next/image";

const User = () => {
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <i className="fas fa-user-circle fa-2x"></i>
        {/* <Image
          src="/img/user-160x160.jpg"
          alt="User Image"
          className="img-circle elevation-2"
          width={160}
          height={160}
        /> */}
      </div>
      <div className="info">
        <a href="#" className="d-block">
          User 1
        </a>
      </div>
    </div>
  );
};

export default User;
