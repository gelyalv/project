import React from "react";

export default function RestorePassword() {
    return(
        <div className="mt-3 card bg-dark p-3 col-4 offset-4">
        <div className="card-header">
            <h3 className="text-center text-white">Restore password</h3>
        </div>
        <form className="card-body">
            <div className="row">
                <div className="col-12">
                    <input className="form-control" id="name" placeholder="Indicate your e-mail or phone number" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <input className="col-12 btn btn-yellow" type="submit" value="Restore password" />
                </div>
            </div>
        </form>
    </div>
    )
}