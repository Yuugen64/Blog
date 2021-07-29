import "./menubar.css"
import oasis from "./oasis.jpg"

export default function MenuBar() {

    return (
        <div className="menuBar">
            <div className="left">
            <i className="menuMediaIcon" class="fas fa-envelope"></i>
            <i className="menuMediaIcon" class="fab fa-github"></i>
            <i className="menuMediaIcon" class="fab fa-pinterest"></i>
            <i className="menuMediaIcon" class="fab fa-youtube"></i>
            </div>


            <div className="center">
                <ul className="menuList">
                    <li className="menuListItem">HOME</li>
                    <li className="menuListItem">ABOUT</li>
                    <li className="menuListItem">CONTACT</li>
                    <li className="menuListItem">WRITE</li>
                    <li className="menuListItem">LOGOUT</li>
                </ul>
            </div>


            <div className="right">
                <img
                className="menuImage"
                src={oasis}
                alt=""
                />

                <p>Image goes here</p>

                <i className="menuSearchIcon" class="fas fa-search"></i>
            </div>


        </div>
    )

}
