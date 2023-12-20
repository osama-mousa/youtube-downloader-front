import React, { useState } from "react";
import './UploadUrl.css'

const UploadUrl = () => {
    const [VideoUrl, setVideoUrl] = useState(null);

    const PostLink = async () => {
        fetch('http://localhost:3001/hello', {
            mode: 'no-cors',
            credentials: 'include',
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3001   '
            },
            body: JSON.stringify({
                "client_id": "1",
                "video_link": VideoUrl,
            })
        }).then(response => {
            console.log(response);
            // if (!response.ok) {
            //     throw new Error("HTTP error " + response.status);
            // }
            // return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => console.log('Fetch error : ' + error.message));
    }

    const handleUrlVideo = (event) => {
        const file = event.target.value;
        setVideoUrl(file);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Video URl"
                name="imageUrl"
                onChange={handleUrlVideo}
            />
            <button className="downloadBtn" onClick={PostLink}>Download</button>
        </>
    )
}

export default UploadUrl;