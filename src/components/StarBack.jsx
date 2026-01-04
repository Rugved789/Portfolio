import { useEffect, useState } from "react";

const StarBack = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numbersofStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      );

      const newStars = [];
      for (let i = 0; i < numbersofStars; i++) {
        newStars.push({
          id: `${Date.now()}-${i}-${Math.random()}`,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
        });
      }

      setStars(newStars);
    };

    const generateMeteors = () => {
      const numbersofMeteors = 4;
      const newMeteors = [];

      for (let i = 0; i < numbersofMeteors; i++) {
        const animationDuration = Math.random() * 3 + 3;
        const delay = Math.random() * animationDuration; // use a delay within the duration

        newMeteors.push({
          id: `${Date.now()}-m-${i}-${Math.random()}`,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 20,
          delay,
          animationDuration,
        });
      }

      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          />
        );
      })}
      {meteors.map((meteor) => {
        return (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: `-${meteor.delay}s`,
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarBack;