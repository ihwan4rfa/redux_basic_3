import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import loginSlice from "./redux/slices/loginSlice";
import { login, logout } from "./redux/slices/loginSlice";
import { decrement, increment } from "./redux/slices/countSlice";

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);
  const count = useSelector((state) => state.count.count);

  const handleAuth = () => {
    if (isLogin) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>{isLogin ? "sudah Login" : "belum Login"}</h1>
      <div>
        {isLogin && <h2>{username}</h2>}
        <Card></Card>
      </div>
      <button onClick={handleAuth}>{isLogin ? "Logout" : "Login"}</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Tambah</button>
        <h2>{count}</h2>
        <button onClick={handleDecrement}>Kurang</button>
      </div>
    </>
  );
}

export default App;
