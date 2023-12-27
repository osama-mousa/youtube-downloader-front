import React, { useState, useEffect } from "react";
import './Download.css';

const Download = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [isValidLink, setIsValidLink] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [serverVideoUrl, setServerVideoUrl] = useState(""); // Status for storing the video address from the server
    const [processingVideo, setProcessingVideo] = useState(false); // Status to indicate loading
    const [correctMessage, setCorrectMessage] = useState("");

    const handleUrlVideo = (event) => {
        const url = event.target.value;
        setVideoUrl(url);

        const isYouTubeLink = url.includes('https://www.youtube.com/') || url.includes('https://youtu');
        setIsValidLink(isYouTubeLink);
        setErrorMessage(isYouTubeLink ? "" : "The URL does not include a valid YouTube link");
        setCorrectMessage("The Link is correct");
    }

    const handleDownload = async () => {
        // Delete the old video if it exists
        if (serverVideoUrl) {
            URL.revokeObjectURL(serverVideoUrl);
            setServerVideoUrl("");
        }

        if (isValidLink) {
            try {
                setProcessingVideo(true);

                const response = await fetch('https://5153-78-184-131-101.ngrok-free.app/api/downloadVideo', {
                    method: 'POST',
                    headers: {
                        'accept': 'video/mp4',
                        'Content-Type': 'application/json',
                        // Add proper CORS headers if needed
                    },
                    body: JSON.stringify({ "link": videoUrl }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = 'video.mp4';
                a.click();

                setProcessingVideo(false);

                //Display the new video
                setServerVideoUrl(url);
            } catch (error) {
                console.error('Error in fetch request:', error);

                setProcessingVideo(false);
                setCorrectMessage("The download link not found.")
            }
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Video URL (https://www.youtube.com/...)"
                name="imageUrl"
                value={videoUrl}
                onChange={handleUrlVideo}
            />
            <button className="downloadBtn" onClick={handleDownload} disabled={!isValidLink || processingVideo}>
                {processingVideo ? 'Downloading...' : 'Download'}
            </button>

            <div>
                {isValidLink ? (
                    <p>{correctMessage}</p>
                ) : (
                    <p>{errorMessage}</p>
                )}
            </div>

            {serverVideoUrl && (
                <div>
                    <p>Your Video:</p>
                    <video className="video" controls>
                        <source src={serverVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </>
    );
}

export default Download;
