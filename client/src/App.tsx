import { Outlet, Routes, Route } from "react-router-dom";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import jwt_decode from "jwt-decode";
import { history, store } from './store';
import Login from "./pages/Login/Login";
import { Layout } from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import SignUp from "./pages/SignUp/SignUp";
import WalletRegister from "./pages/WalletRegister/WalletRegister";
import setAuthToken from "./utils/setAuthToken";
import { axiosGetContentAction, logoutUser } from "./features/auth/actions";
import "./App.scss";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  
  setAuthToken(token);
  
  const decoded = jwt_decode(token) as any;
  
  store.dispatch(axiosGetContentAction.success({
    token: token,
    success: true
  }));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = './login';
  }
}

const App = () => {
  return (
    <ReduxRouter history={history}>
      <Routes>
        <Route
          path='/' 
          element={
            <Layout
              Content={() => <Outlet />}
              Footer={() => <Footer/>}
            />
          }
        >
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route
          path='/auth'
          element={
            <Layout 
              Header={() => <Header />}
              Content={() => <Outlet />}
              Footer={() => <Footer/>}
            />
          }
        >
          <Route index element={<SignUp />} />
          <Route path="wallet" element={<WalletRegister />} />
        </Route>
      </Routes>
    </ReduxRouter>
  );
};

export default App;
