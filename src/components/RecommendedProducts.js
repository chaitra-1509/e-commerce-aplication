import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import r1 from "./images/r1.png";
import r2 from "./images/r2.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

function RecommendedProducts() {
  return (
    <>
      <div className="recommend">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={r1} />
          </Item>

          <Item>
            <img src={r2} className="image" />{" "}
          </Item>
          <Item>
            <img src={r1} className="image" />{" "}
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default RecommendedProducts;
