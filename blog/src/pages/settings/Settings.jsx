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
                    <div className="settingsProfilePicture">
                        <img 
                        src={oasis} 
                        alt="" 
                        />

                    </div>


                    <label htmlFor="fileInput">
                            <i className="settingsUploadIcon fas fa-user-circle"></i>
                        </label>

                        <input type="file" id="fileInput" style={{display: "none"}} />

                        <label>Username</label>
                        <input type="text" placeholder="Yuugen64" />

                        <label>email</label>
                        <input type="email" placeholder="yuugen64@protonmail.com" />

                        <label>password</label>
                        <input type="password" placeholder="password" />

                        <button className="settingsSubmit">Update</button>
                </form>

            </div>

            <Sidebar />
        </div>
    )
}
