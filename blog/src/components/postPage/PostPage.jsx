import './postPage.css'
import oasis from "./oasis.jpg"

export default function PostPage() {
    return (
        <div className="postPage">

            <div className="postPageContainer">
                
                <img 
                className="postPageImage"
                src={oasis} 
                alt="" />

                <p className="postPageTitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    
                    <div className="postPageEditContainer">
                        <i className="postPageIcon fas fa-pencil-alt"></i>
                        <i className="postPageIcon fas fa-trash-alt"></i>
                    </div>
                </p>

                <div className="postPageInfo">
                    <span className="postPageAuthor">
                        Author: <b>AJ</b>
                    </span>

                    <span className="postPageTime">
                        1 hour ago
                    </span>
                </div>

                <p className="postPageContent">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, reiciendis asperiores! 
                    Quod libero, minus commodi accusantium neque itaque doloribus sit voluptatibus? 
                    Iste hic esse beatae consectetur officia. Adipisci, inventore odio.
                </p>

            </div>

        </div>
    )
}
