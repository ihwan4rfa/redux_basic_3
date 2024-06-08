import { useSelector } from "react-redux";

const Card = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <div>
      <h1>Card</h1>
      {/* <h1>{isLogin ? "Login" : "Logout"}</h1> */}
    </div>
  );
};

export default Card;
