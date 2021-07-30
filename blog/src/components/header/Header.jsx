import "./header.css"
import oasis from "./oasis.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
            className="headerImage"
            src={oasis}
            alt="" />
        </div>
    )
}
