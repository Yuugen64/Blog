import './write.css'
import oasis from './oasis.jpg'

export default function Write() {
    return (
        <div className="write">

            <img
            className="writeImage" 
            src={oasis} 
            alt="" />




            {/* This is the entire upload section; Image Upload IconButton, Title input, Text input */}
            <form className="writeForm">

                <div className="writeFormGroup">

                    {/* This is the upload FA icon, and field inline styled to be hidden so only the field and icon are visible. */}
                    <label htmlFor="fileInput">
                        <i className="writeUploadIcon fas fa-arrow-circle-up"></i>
                    </label>

                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autofocus={true} />

                </div>

                <div className="writeFormGroup">
                    <textarea placeholder="Write your post..." type="text" className="writeInput writeText"></textarea>
                </div>

                <button className="writeSubmitButton">Post</button>

            </form>
        </div>
    )
}
