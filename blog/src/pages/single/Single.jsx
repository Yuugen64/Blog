import './single.css'
import Sidebar from "../../components/sidebar/Sidebar"
import PostPage from "../../components/postPage/PostPage"

export default function Single() {
    return (
        <div className="single">
            <PostPage />
            <Sidebar />
        </div>
    )
}
