import "./menubar.css"
import oasis from "./oasis.jpg"
import { Link } from "react-router-dom";


export default function MenuBar() {

    const user = false;

    return (
        <div className="menuBar">
            <div className="left">
            <i className="menuMediaIcon fas fa-envelope"></i>
            <i className="menuMediaIcon fab fa-github"></i>
            <i className="menuMediaIcon fab fa-pinterest"></i>
            <i className="menuMediaIcon fab fa-youtube"></i>
            </div>


            <div className="center">
                <ul className="menuList">

                    <li className="menuListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>

                    <li className="menuListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="menuListItem">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>
                    <li className="menuListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="menuListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>


            <div className="right">
                {/* If there is a user logged in, use this image. Else, don't. */}
                { user ? (
                <img
                className="menuImage"
                src={oasis}
                alt=""
                />
                ):(
                    <>
                    <Link className="link" to="/login">LOGIN</Link>
                    <Link className="link" to="/register">REGISTER</Link>
                    </>
                )}
                

                <i className="menuSearchIcon fas fa-search"></i>
            </div>


        </div>
    )

}
