import { useState, useEffect, useRef } from 'react';
//import './StatsCounter.css';

// Reusable single counter hook/logic for smooth animation
const AnimatedNumber = ({ target, duration = 2000, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let start = 0;
        const end = parseInt(target, 10);
        if (start === end) return;

        const totalMiliseconds = duration;
        const frameRate = 1000 / 60; // 60 frames per second
        const totalFrames = Math.round(totalMiliseconds / frameRate);
        let currentFrame = 0;

        const counter = setInterval(() => {
            currentFrame++;
            // Ease-out quad function for smooth slowing down at the end
            const progress = currentFrame / totalFrames;
            const easeProgress = progress * (2 - progress);

            const currentCount = Math.round(end * easeProgress);

            if (currentFrame >= totalFrames) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(currentCount);
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [target, duration, trigger]);

    return <>{count}</>;
};

const StatsCounter = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer to trigger counting ONLY when visible on screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect(); // Runs animation only once
                }
            },
            { threshold: 0.2 } // Starts when 20% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const statsData = [
        { id: 1, target: 150, label: 'Projects Completed', suffix: '+' },
        { id: 2, target: 10, label: 'Years of Experience', suffix: '+' },
        { id: 3, target: 25, label: 'Team Members', suffix: '' },
    ];

    return (
        <section className="stats-section inner-page" ref={sectionRef}>
            <div className="stats-container">
                {statsData.map((stat) => (
                    <div key={stat.id} className="stat-card">
                        <h2 className="stat-number">
                            <AnimatedNumber target={stat.target} trigger={startAnimation} />
                            {stat.suffix}
                        </h2>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;