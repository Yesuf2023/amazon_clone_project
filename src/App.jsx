import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { useStateValue } from "./stateProvider";
import { auth } from "./firebase.jsx";
import Payment from "./Components/Payment/Payment.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders.jsx";

const promise = loadStripe(
  "pk_test_51NhOX0L78zoAtca4e3S4Wxy3OTZaQPnzCOFchHuQcnVc32oS7UaQpFoFer96U0B83rZbwv22Cw7nl5G0SLpg4yDk0015JTDLZU"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}/>
          {/* <Route path="/payment" element={<>{" "}<Header />{" "}<Elements stripe={promise}>{" "}<Payment /></Elements>{" "}</>}/> */}
          {/* <Route path="/checkout" element={<>{" "}<Header /> <Checkout />{" "}</>}/> */}
          <Route path="/checkout" element={<><Header /> <Checkout /></>}/>
          <Route path="/orders" element={<Orders />} /> 
          {/* <Route path="/" element={<>{" "} <Header /> <Home /> </>}/> */}
          <Route path="/" element={<> <Header /> <Home /> </>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
