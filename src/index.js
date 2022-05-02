import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleHotel from "./routes/singleHotel";
import Hotels from "./routes/hotels";
import SignIn from "./routes/signIn";
import Success from "./routes/success";
import Admin from "./routes/admin";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="singlehotel/:id" element={<SingleHotel />} />
        <Route path="success" element={<Success />} />{" "}
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
