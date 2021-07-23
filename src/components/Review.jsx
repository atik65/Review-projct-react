import React, { useState } from "react";
import "../App.css";
import people from "./people";

const Review = () => {
  let [index, setIndex] = useState(0);
  let { name, age, img, review } = people[index];

  let indexFilter = (index) => {
    if (index >= people.length) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  let prev = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return indexFilter(newIndex);
    });
  };
  let next = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return indexFilter(newIndex);
    });
  };

  let random = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = index + 1;
    }

    let newIndex1 = indexFilter(newIndex);
    setIndex(newIndex1);
    console.log(newIndex1);
  };
  return (
    <>
      <div className="main ">
        <span className="review-title">Reviews</span>
        <div className="review-card">
          <div className="img">
            <img src={img} alt={name} />
          </div>
          <div className="name">
            Name: {name} / Age: {age}
          </div>

          <div className="text">{review}</div>
          <div className="icons">
            <span>
              <button className="btn" onClick={prev}>
                <i class="fas fa-arrow-left    "></i>
              </button>
            </span>
            <span>
              <button className="btn" onClick={next}>
                <i class="fas fa-arrow-right    "></i>
              </button>
            </span>
          </div>
          <div className="random">
            <button className="btn" onClick={random}>
              Random Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
