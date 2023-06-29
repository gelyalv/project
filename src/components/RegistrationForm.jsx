import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";

export default function RegistrationForm() {
    return (
        <div className="mt-3 card bg-dark p-3">
            <div className="card-header">
                <h3 className="text-center text-white">Sign in</h3>
            </div>
            <form className="card-body">
                <div className="row">
                    <div className="col-1">
                        <label className="mt-2 form-label text-white" htmlFor="text">
                            <FontAwesomeIcon icon={icon({ name: "user", style: "regular", size: "2xs" })} />
                        </label>
                    </div>
                    <div className="col-11">
                        <input className="form-control" id="name" placeholder="Login" />
                    </div>
                </div>
                <div className="mt-3 row ">
                    <div className="col-1 text-white">
                        <label className="form-label mt-2 " htmlFor="password">
                            <FontAwesomeIcon icon={icon({ name: "lock", style: "solid" })} />
                        </label>
                    </div>
                    <div className="col-11">
                        <input className="form-control" type="password" id="password" placeholder="Password" />
                    </div>
                </div>
                <div className="row mt-3 text-white">
                    <div className="col-11 offset-1">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid mt-3">
                    <input className="btn btn-yellow" type="submit" value="Sign in" />
                </div>
            </form>
            <div className="card-footer text-warning">
                <div className="row">
                    <div className="col-6">
                        <Link to="/restore" className="text-white">Lost your password?</Link>
                    </div>
                    <div className="col-6 text-end">
                        <span>Already have an account? <Link to="/login" className="text-white">Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}