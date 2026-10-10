import { useState } from "react";
import './styles/halfStar.css'




export default function HalfStars({ starCount = 5 }) {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const activeStar = hoverValue > 0 ? hoverValue : starValue;

  const handleMouseMove = (e, index) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    console.log(e.currentTarget.getBoundingClientRect());
    console.log(left,width);

    const isHalf = e.clientX - left < width / 2;

    setHoverValue(isHalf ? index + 0.5 : index + 1);
  };

  const handleClick = (e, index) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();

    const isHalf = e.clientX - left < width / 2;

    setStarValue(isHalf ? index + 0.5 : index + 1);
  };

  return (
    <>
      <h3>You can leave your ratings here</h3>

      <div onMouseLeave={() => setHoverValue(0)}>
        {new Array(starCount).fill(0).map((_, index) => {
          
          const value = index + 1;

          let className = "";

          if (activeStar >= value) {
            className = "gold";
          } 
          else if (activeStar >= value - 0.5) {
            className = "half";
          }

          return (
            <span
              key={index}
              className={`star ${className}`}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onClick={(e) => handleClick(e, index)}
            >
              &#9733;
            </span>
          );
        })}
      </div>

      <h4>Your rating is {starValue}</h4>
    </>
  );
}