import React from "react";

const LatestNews = () => {
  const newsData = [
    {
      title: "Mountain",
      description:
        "Hartalkar Innovations expands its R&D in off-road EVs with rugged terrain testing and durability research for next-gen electric vehicles.",
      img: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80",
    },
    {
      title: "Road",
      description:
        "Our latest electric prototype achieves record-breaking efficiency and range across India’s electric highway network, setting new standards for EV performance.",
      img: "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80",
    },
    {
      title: "Innovation",
      description:
        "Hartalkar’s AI-powered safety systems bring advanced driver assistance and autonomous control to new electric vehicle platforms.",
      img: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=750&q=80",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "50px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#00e5ff",
          fontWeight: "700",
        }}
      >
        Latest News
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {newsData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "15px",
              padding: "1.5rem",
              background: "white",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              transition: "transform 0.4s ease-out",
              boxShadow: "0px 7px 15px rgba(0,0,0,0.5)",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-15px)";
              e.currentTarget.querySelector(".overlay").style.opacity = "1";
              e.currentTarget.querySelector(".info").style.opacity = "1";
              e.currentTarget.querySelector(".info").style.transform =
                "translateY(0)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.querySelector(".overlay").style.opacity = "0";
              e.currentTarget.querySelector(".info").style.opacity = "0";
              e.currentTarget.querySelector(".info").style.transform =
                "translateY(40px)";
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "0",
                left: "0",
                borderRadius: "15px",
              }}
            />
            <div
              className="overlay"
              style={{
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                background: "rgba(0,0,0,0.65)",
                zIndex: "2",
                opacity: "0",
                transition: "opacity 0.5s ease",
              }}
            ></div>

            <div
              className="info"
              style={{
                position: "relative",
                zIndex: "3",
                color: "white",
                opacity: "0",
                transform: "translateY(40px)",
                transition: "all 0.5s ease",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  fontSize: "1.6rem",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </h1>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                  color: "#f1f1f1",
                  maxHeight: "140px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}
              </p>
              <button
                style={{
                  marginTop: "15px",
                  padding: "0.6rem 1.2rem",
                  border: "none",
                  borderRadius: "5px",
                  background: "white",
                  color: "black",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#00bcd4";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "black";
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
