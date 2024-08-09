import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

interface YouTubePlayerProps {
    videoId: string;
    onClose: () => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, onClose }) => {
    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='fixed'>
            <div className="fixed top-32 left-80 w-1/2 h-1/2 bg-black bg-opacity-75 flex items-center justify-center">
                <div className="relative w-full h-full max-w-2xl max-h-2xl">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        playing={true}
                        controls={true}
                        width="100%"
                        height="100%"
                        className="top-0 left-0"
                    />
                    <button
                        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YouTubePlayer;
