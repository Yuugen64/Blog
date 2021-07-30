import "./post.css"
import oasis from "./oasis.jpg"

export default function Post() {
    return (
        <div className="post">
            {/* A single POST image */}
            <img 
            className="postImage"
            src={oasis} 
            alt="" 
            />

            <div className="postInfo">

                <div className="postCategories">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>

                <span className="postTitle">
                    Lorem ipsum dolor sit
                </span>

                <hr/>

                <span className="postDate">1 hour ago</span>

            </div>

            <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut quidem odit rem, doloribus optio! Maiores sequi sapiente accusamus at amet modi? Suscipit obcaecati tenetur laborum, recusandae perspiciatis dicta velit.</p>
        </div>
    )
}
