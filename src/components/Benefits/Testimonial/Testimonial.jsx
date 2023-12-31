import React from "react";
import "./Testimonial.css";

const Testimonial = (User) => {
  return (
    <div id="testimonials">
      <div className="cornerImg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="46"
          viewBox="0 0 72 46"
          fill="none"
        >
          <path
            d="M-3 8.3742V24.079H18.875C18.87 27.5486 17.2222 30.875 14.2931 33.3285C11.3639 35.7819 7.39248 37.1621 3.25 37.1662V45.0186C9.87813 45.0124 16.2327 42.8042 20.9194 38.8787C25.6062 34.953 28.2426 29.6306 28.25 24.079V-2.09564H9.5C6.18479 -2.09564 3.00537 -0.992573 0.661165 0.970902C-1.68304 2.93438 -3 5.59742 -3 8.3742Z"
            fill="white"
            fill-opacity="0.1"
          />
          <path
            d="M53.2497 -2.09564C49.9345 -2.09564 46.7551 -0.992573 44.4109 0.970902C42.0667 2.93438 40.7497 5.59742 40.7497 8.3742V24.079H62.6247C62.6197 27.5486 60.9719 30.875 58.0428 33.3285C55.1136 35.7819 51.1422 37.1621 46.9997 37.1662V45.0186C53.6278 45.0124 59.9823 42.8042 64.6691 38.8787C69.3559 34.953 71.9922 29.6306 71.9997 24.079V-2.09564H53.2497Z"
            fill="white"
            fill-opacity="0.1"
          />
        </svg>
      </div>
      <div className="opinion">
        "I've been using LegacyLine for several years now, and I couldn't be
        happier with their services. The mobile banking app they provide is an
        absolute game-changer. It's incredibly user-friendly and has made
        managing my finances a breeze."
      </div>

      <div className="userCard">
        <div className="userImg">{User.img}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div className="userName">Jerry Helfer</div>
          <div className="date">24 Oct, 2023</div>
          <div className="star">⭐</div>
          {/* 5 stars */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
