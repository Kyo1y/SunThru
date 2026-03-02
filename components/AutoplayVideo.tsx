"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC =
    "https://video.wixstatic.com/video/3a2d87_493d9b5e214240f8b88d223d69aafb8d/1080p/mp4/file.mp4";

export default function AutoplayVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {
                        // Autoplay blocked by browser — user can still click play
                    });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.65 } // triggers when 65% of the video is visible
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            className="w-full aspect-video bg-navy"
            controls
            muted
            playsInline
            preload="metadata"
        >
            <source src={VIDEO_SRC} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
