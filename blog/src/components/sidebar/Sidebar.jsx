import "./sidebar.css"
import oasis from "./oasis.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={oasis} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarMediaIcon fas fa-envelope"></i>
                    <i className="sidebarMediaIcon fab fa-github"></i>
                    <i className="sidebarMediaIcon fab fa-pinterest"></i>
                    <i className="sidebarMediaIcon fab fa-youtube"></i>
                </div>
            </div>

        </div>
    )
}
