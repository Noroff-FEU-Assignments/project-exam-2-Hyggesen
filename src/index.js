import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleHotel from "./routes/singleHotel";
import Hotels from "./routes/hotels";
import SignIn from "./routes/signIn";
import Admin from "./routes/admin";
import { AuthProvider } from "./context/AuthContext";
import Contact from "./routes/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="hotels/:id" element={<SingleHotel />} />
        <Route path="admin" element={<Admin />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
