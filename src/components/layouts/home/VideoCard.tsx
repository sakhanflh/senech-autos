// src/components/VideoCard.tsx
import React, { useState, useRef } from 'react';

interface VideoPlayerProps {
    src: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const VideoCard: React.FC<VideoPlayerProps> = ({
    src,
    controls = false,
    autoPlay = false,
    loop = false,
    muted = false
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="relative">
            <video
                ref={videoRef}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="rounded-lg border-2 border-gray-300 w-full xl:w-[40rem]"
                onClick={handlePause}
            >
                <source src={src} type="video/mp4" />
                Your browser cannot play this video.
            </video>
            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                    onClick={handlePlay}
                >
                    {/* <FaPlay className="text-white text-6xl" /> */}
                    <div className={`relative w-full h-full`}>
                        <img src="/img/howItWorksBannerBig.1d6c0104.webp" alt="Video Thumbnail" className="w-full h-full object-cover" />
                        <button
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="bg-white rounded-full p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-8 h-8 text-orange-500"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-2.598A1 1 0 008 9.423v5.154a1 1 0 001.555.832l5.197-2.598a1 1 0 000-1.79z" />
                                </svg>
                            </div>
                            <span className="ml-4 text-lg font-bold">Play video</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCard;
