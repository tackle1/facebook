import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/userAction";
import Register from "./components/formlogin/Register";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []); //{type, payload}
  return (
    <>
      <Header />
      <Register />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-profile/*" element={<Profile />} />
        <Route path="/:nickname" element={<FriendProfile />} />
      </Routes> */}
    </>
  );
}

export default App;


