import React, { useState, useEffect, useRef } from "react";

const slides = [
  { img: "/images/Media/P76.png", description: "Advanced EV powertrain module under testing." },
  { img: "/images/Media/P4.jpg", description: "Prototype of smart charging infrastructure." },
  { img: "/images/Media/P19.jpg", description: "R&D team developing AI-assisted driving system." },
  { img: "/images/Media/P39.jpg", description: "Hartalkar Innovation EV lineup display." },
  { img: "/images/Media/P43.jpg", description: "Autonomous navigation field testing." },
  { img: "/images/Media/P48.jpg", description: "Battery efficiency testing laboratory." },
  { img: "/images/Media/P50.jpg", description: "Embedded hardware integration setup." },
  { img: "/images/Media/P53.jpg", description: "Smart dashboard prototype." },
  { img: "/images/Media/P57.jpg", description: "EV telematics and GPS data visualization." },
  { img: "/images/Media/P64.jpg", description: "Charging station interface testing." },
  { img: "/images/Media/P78.png", description: "Innovative hybrid kernel EV OS demo." },
  { img: "/images/Media/P67(1).jpg", description: "Autonomous drive simulation lab." },
  { img: "/images/Media/P69.jpg", description: "Sustainability-focused product launch." },
  { img: "/images/Media/P72.jpg", description: "High-performance EV chassis test rig." },
  { img: "/images/Media/P73.jpg", description: "Team working on motion prediction algorithms." },
  { img: "/images/Media/P74.jpg", description: "Design prototype under review." },
  { img: "/images/Media/P75.jpg", description: "Visualization of battery pack thermal data." },
  { img: "/images/Media/P17.jpg", description: "AI model training for driver safety." },
  { img: "/images/Media/P59.jpg", description: "Smart mobility conference showcase." },
];

const newsItems = [
  {
    img: "/images/news1.jpg",
    title: "EV Market Surges in 2025",
    description:
      "Electric vehicle sales hit record highs this year as battery costs continue to fall and infrastructure expands globally...",
  },
  {
    img: "/images/news2.jpg",
    title: "AI Driving Assistance Update",
    description:
      "New AI-assisted driving models use camera and motion sensors to predict hazards and improve driver safety...",
  },
  {
    img: "/images/news3.jpg",
    title: "Hartalkar Innovation Expands",
    description:
      "Hartalkar Innovation announces its new R&D center focusing on smart mobility and sustainable vehicle systems...",
  },
  {
    img: "/images/news4.jpg",
    title: "Charging Stations Everywhere",
    description:
      "Over 100,000 new EV charging stations have been installed across India...",
  },
  {
    img: "/images/news5.jpg",
    title: "Autonomous Fleet Testing Begins",
    description:
      "The first autonomous EV fleet begins testing on Indian roads...",
  },
];

const Media = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [newsIndex, setNewsIndex] = useState(0);
  const total = slides.length;
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, total]);

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 7000);
    return () => clearInterval(newsInterval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    setPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 100) {
      diff > 0 ? prevSlide() : nextSlide();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setPaused(false);
  };

  const getClassName = (i) => {
    const diff = (i - index + total) % total;
    switch (diff) {
      case 0:
        return "slide active";
      case 1:
        return "slide right-1";
      case 2:
        return "slide right-2";
      case total - 1:
        return "slide left-1";
      case total - 2:
        return "slide left-2";
      default:
        return "slide";
    }
  };

  return (
    <div className="media-wrapper">
      <video className="background-video" src="/media/Hero1.mp4" autoPlay loop muted playsInline />
      <div className="overlay"></div>

      {/* ======= Image Slider ======= */}
      <div
        className="slider-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="slider">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={getClassName(i)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <img src={slide.img} alt={`Slide ${i}`} draggable="false" />
              <div className="hover-overlay">
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="hover-zone left-zone">
          <button className="nav-btn left-btn" onClick={prevSlide}>❮</button>
        </div>
        <div className="hover-zone right-zone">
          <button className="nav-btn right-btn" onClick={nextSlide}>❯</button>
        </div>
      </div>

      {/* ======= Latest News Section ======= */}
      <div className="latest-news">
        <h2 className="news-heading">Latest News</h2>
        <div className="news-card">
          <div className="news-image">
            <img src={newsItems[newsIndex].img} alt="news" />
          </div>
          <div className="news-content">
            <h2 className="news-title">{newsItems[newsIndex].title}</h2>
            <div className="news-description">
              <p>{newsItems[newsIndex].description}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .media-wrapper { position: relative; width: 100%; min-height: 100vh; overflow: hidden; color: white; }
        .background-video { position: fixed; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; opacity: 0.9; }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle, rgba(0,255,255,0.05), rgba(0,0,0,0.6)); z-index: -1; }

        .slider-container { height: 100vh; display: flex; justify-content: center; align-items: center; margin-top: 130px; position: relative; }
        .slider { position: relative; width: 100%; max-width: 1100px; height: 500px; perspective: 800px; display: flex; justify-content: center; align-items: center; }

        .slide { position: absolute; width: 50%; height: 80%; transition: all 1s ease; opacity: 0; overflow: hidden; border-radius: 12px; }
        .slide img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; border: 2px solid rgba(0,255,255,0.4); transition: all 0.6s ease; }
        .slide:hover img { transform: scale(1.05); box-shadow: 0 0 40px rgba(0,255,255,0.5); }

        .hover-overlay { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); color: cyan; display: flex; justify-content: center; align-items: center; text-align: center; font-size: 1.2rem; opacity: 0; transition: all 0.5s ease; padding: 20px; }
        .slide:hover .hover-overlay { opacity: 1; }

        .slide.active { opacity: 1; transform: scale(1.1); z-index: 5; }
        .slide.left-1 { transform: translateX(-250px) rotateY(25deg); opacity: 0.8; }
        .slide.right-1 { transform: translateX(250px) rotateY(-25deg); opacity: 0.8; }

        .hover-zone { position: absolute; top: 0; width: 10%; height: 100%; z-index: 8; display: flex; justify-content: center; align-items: center; }
        .left-zone { left: 0; }
        .right-zone { right: 0; }

        .nav-btn { background: none; border: none; color: cyan; font-size: 3rem; cursor: pointer; opacity: 0; transition: opacity 0.3s ease, transform 0.2s ease; }
        .hover-zone:hover .nav-btn { opacity: 1; transform: scale(1.1); }

        .latest-news { width: 100%; max-width: 1100px; margin: 80px auto; padding: 20px; background: rgba(0,0,0,0.6); border: 1px solid rgba(0,255,255,0.2); border-radius: 12px; box-shadow: 0 0 20px rgba(0,255,255,0.2); }
        .news-heading { text-align: center; color: cyan; font-size: 2rem; margin-bottom: 20px; }

        .news-card { display: flex; align-items: center; gap: 20px; min-height: 400px; }
        .news-image img { width: 380px; height: 380px; object-fit: cover; border-radius: 12px; border: 2px solid rgba(0,255,255,0.4); }
        .news-content { width: 70%; }

        .news-title { color: cyan; font-size: 1.9rem; font-weight: 600; text-transform: uppercase; margin-bottom: 18px; text-shadow: 0 0 8px rgba(0,255,255,0.6); }
        .news-description { background: rgba(0,255,255,0.08); border-left: 3px solid cyan; border-radius: 10px; padding: 25px; text-align: justify; color: #e0e0e0; line-height: 2; font-size: 1.1rem; word-spacing: 2px; letter-spacing: 0.3px; overflow-y: auto; max-height: 250px; scrollbar-width: thin; scrollbar-color: cyan transparent; }
        .news-description::-webkit-scrollbar { width: 6px; }
        .news-description::-webkit-scrollbar-thumb { background-color: cyan; border-radius: 4px; }

        /* ===== Responsive Design Fixes ===== */
          @media (max-width: 768px) {
          /* ✅ Fix 1: extra top space to avoid header overlap */
          .slider-container { 
            flex-direction: column; 
            height: auto; 
            margin-top: 140px; /* increased for mobile header space */
          }

          .slider { height: 300px; max-width: 90%; }
          .slide { width: 90%; height: 300px; }
          .slide.left-1, .slide.right-1 { transform: scale(0.9); opacity: 0.7; }
          .hover-overlay p { font-size: 0.9rem; padding: 10px; }
          .nav-btn { font-size: 2rem; }

          /* ✅ Fix 2: make news image square on mobile */
          .latest-news { margin: 40px 10px; padding: 15px; }
          .news-heading { font-size: 1.5rem; }
          .news-card { flex-direction: column; gap: 15px; align-items: center; }
          .news-image img { 
            width: 250px; 
            height: 250px; 
            object-fit: cover; 
            border-radius: 12px; 
          }
          .news-content { width: 100%; text-align: center; }
          .news-title { font-size: 1.3rem; }
          .news-description { font-size: 0.95rem; max-height: 180px; padding: 15px; }
        }

        @media (max-width: 480px) {
          .slider { height: 220px; }
          .slide { width: 100%; height: 220px; }
          .hover-overlay p { font-size: 0.8rem; }
          .nav-btn { font-size: 1.8rem; }
          .news-heading { font-size: 1.3rem; }
          .news-description { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
};

export default Media;
