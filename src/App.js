import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPageContainer from "./pages/auth/register";
import LoginPageContainer from "./pages/auth/login";
import HomePageContainer from "./components/home";
import PublicRoute from "./components/route/public.route";
import PrivatRoute from "./components/route/private.route";
import DialogPageContainer from "./components/dialog/DialogWindow";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import operations from "./redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.currentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route element={<HomePageContainer />} path={"/"} />
      <Route element={<PublicRoute />}>
        <Route element={<LoginPageContainer />} path={"/login"} />
        <Route element={<RegisterPageContainer />} path={"/register"} />
      </Route>
      <Route element={<PrivatRoute />}>
        <Route element={<DialogPageContainer />} path={"/dialog"} />
      </Route>
    </Routes>
  );
}

export default App;
