import './settings.css'
import oasis from "./oasis.jpg"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">

            <div className="settingsWrapper">

                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>

                <form className="settingsForm">
                    

                    <label>Profile Picture</label>
                    {/* This div has the className so we can style the container and then use inheritence to style the child img with '> img' */}
                    <div className="settingsProfilePicture">
                        <img 
                        src={oasis} 
                        alt="" 
                        />

                        <label htmlFor="fileInput">
                            <i className="settingsProfileIcon fas fa-user-circle"></i>
                        </label>

                    </div>


                    

                        <input type="file" id="fileInput" style={{display: "none"}} />

                        <label>Username</label>
                        <input type="text" placeholder="Yuugen64" />

                        <label>email</label>
                        <input type="email" placeholder="yuugen64@protonmail.com" />

                        <label>password</label>
                        <input type="password" placeholder="password" />

                        <button className="settingsSubmitButton">Update</button>
                </form>

            </div>

            <Sidebar />
        </div>
    )
}
