import React from "react";
import "./profilestyle.css"
import engineer from "../assets/engineer.png"

const Profile = () => {

    return (<div className="profile">
        <div className="profile-picture">
            <img src={engineer} />
        </div>
        <div className="profile-details">
            <h3>Computer Engineer</h3>
            <div className="profile-block">
                <p className="profile-label">
                    USERNAME
                </p>
                <p className="profile-value">Niklhil Patil</p>
            </div>
            <div className="profile-block">
                <p className="profile-label">
                    Skills
                </p>
                <p className="profile-value">Frontend Development, Backend Development, DEV/OPS, SAAS, Microservices.</p>
            </div>
            <div className="profile-block">
                <p className="profile-label">
                    LEVEL
                </p>
                <p className="profile-value">4/5</p>
            </div>
        </div>
    </div>)
}

export default Profile;