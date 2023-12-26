import React, { useState, useEffect } from "react";
import './Download.css';

const Download = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [isValidLink, setIsValidLink] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [serverVideoUrl, setServerVideoUrl] = useState(""); // حالة لتخزين عنوان الفيديو من الخادم
    const [processingVideo, setProcessingVideo] = useState(false); // حالة للإشارة إلى جاري التجهيز
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
        // حذف الفيديو القديم إذا كان موجودًا
        if (serverVideoUrl) {
            URL.revokeObjectURL(serverVideoUrl);
            setServerVideoUrl("");
        }

        if (isValidLink) {
            try {
                // تعيين حالة "جاري التجهيز" عند بدء تحميل الفيديو
                setProcessingVideo(true);

                const response = await fetch('https://tube-down-back.vercel.app/api/downloadVideo', {
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
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                // إزالة حالة "جاري التجهيز" بعد الانتهاء من تحميل الفيديو
                setProcessingVideo(false);

                // عرض الفيديو الجديد
                setServerVideoUrl(url);
            } catch (error) {
                console.error('Error in fetch request:', error);

                // إزالة حالة "جاري التجهيز" في حالة حدوث خطأ
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
