import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Login from "./component/Login/Login";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { useEffect, useState } from "react";
import Reserver from "./component/Reservation/Reserver";
import Verifier from "./component/Verification/Verifier";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const getUser = () => {
      fetch("https://bateaux-api.onrender.com/auth/login/success",{
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response => {
        if(response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      }).then(resObject=>{
        setUser(resObject.user);
      }).catch(err => {
        console.log(err)
      })
    };
    getUser()
  },[]);

  console.log(user);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="home">
          <Navbar user={user}/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Main user={user} />} />
            <Route path="/reserver" element={<Reserver user={user} />} />
            <Route path="/verifier" element={<Verifier user={user} />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}
