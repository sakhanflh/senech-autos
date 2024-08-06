// src/components/VideoCard.tsx
import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';

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
        <div className="relative xl:hover:scale-110">
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
                    <FaPlay className="text-white text-6xl" />
                </div>
            )}
        </div>
    );
};

export default VideoCard;
