import RegistrationForm from "../components/RegistrationForm.jsx";
import React from "react";

export default function RegistrationPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
}
