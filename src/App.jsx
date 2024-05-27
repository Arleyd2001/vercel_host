import Register from "@/components/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Financig from "@/components/RegistroMascotas";
import Dog from "@/components/Dog";
import cat from "@/components/Cat";
import Roudents from "@/components/Roudents";
import UserProfile from "@/components/UserProfile";
import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/configFirebase";
import { onAuthStateChanged } from "firebase/auth";
import Admin from "@/components/Admin";
import Qr from "@/components/Qr";
import Cat from "./components/Cat";

const App = () => {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(true);

        setEmail(user.email);
      } else {
        setEmail("");
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Navbar setUser={setUser} user={user} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/roudents" element={<Roudents />} />
          <Route path="/qr/:id" element={<Qr />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Financing" element={<Financig email={email} />} />
          <Route path="/user-profile" element={<UserProfile email={email} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
