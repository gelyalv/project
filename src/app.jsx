import React from "react";
import { Header } from "./components/header.jsx";
import { Profile } from "./components/profile.jsx";
import { Home } from "./components/home.jsx";
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import Login from "./components/login.jsx";
import RestorePassword from "./components/restore-pass.jsx";

export function App ()  {
    return (<div>
        <BrowserRouter >
        <Header></Header>
            <Routes >
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<RegistrationPage />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/restore" element={<RestorePassword />} />
            </Routes>
        </BrowserRouter >
        </div>
    )
}