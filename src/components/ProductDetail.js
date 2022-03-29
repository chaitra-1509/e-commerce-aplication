import React from "react";
import { CgArrowsExchangeV } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

import r2 from "./images/r2.png";
import r1 from "./images/r1.png";
import { NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action/actions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state1", state.count);
  return (
    <div className="grid-container p-5">
      <div className="grid-item">
        <div class="card" style={{ width: "25rem" }}>
          <img class="card-img-top" src={r2} alt="Card image cap" />
          <div class="card-body cardgrid">
            <img src={r1} className="item" />
            <img src={r1} className="item" />
            <img src={r1} className="item" />
          </div>
        </div>
      </div>

      <div className=" grid-item ">
        <h4>Brake Pads</h4>
        <span>
          <IoMdStar className="text-primary fs-4" />
        </span>
        <span>
          <IoMdStar className="text-primary fs-4" />
        </span>
        <span>
          <IoMdStar className="text-primary fs-4" />
        </span>
        <span>
          <IoMdStar className="text-primary fs-4" />
        </span>
        <span>
          <IoMdStarHalf className="text-primary fs-4" />
        </span>
        <span className="text-secondary">
          {" "}
          <small className="text-primary">1085 reviews</small> |{" "}
        </span>
        <span className="text-secondary">
          {" "}
          <small className="text-primary">856 answered questions</small>{" "}
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sem{" "}
          <br /> a nisl auctor laoreet.
        </p>
        <NavLink className="text-primary">more details</NavLink>
        <br />
        <br />
        <span className="fw-bolder fs-4 amount">$87.00</span>
        <span className="ship">Free Shipping</span>
        <NavLink className="text-primary compare">
          <CgArrowsExchangeV className="fs-4" />
          Add to compare
        </NavLink>
        <br />
        <div className="col-xl-1 d-flex mb-5 mt-3">
          <span className="qty">Qty</span>
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
          <input type="text" className="inp " value={state.count} />
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
        </div>
        <button className="btn btn-info cart ">Add to cart</button>
        <button className="btn btn-primary buy">Buy Now</button>
        <br />
        <br />
        <p>
          Share <BsFacebook className=" icon" />
          <AiFillTwitterCircle className=" icon" />
          <AiOutlineInstagram className=" icon" />
          <AiFillYoutube className=" icon" />
        </p>
        <br />
        <span>Sold By</span>
        <NavLink className="text-primary seller">Selller One</NavLink>
        <br />
        <span className="">Seller Rating</span>
        <span>
          <IoMdStar className="text-warning sellerone star" />
        </span>
        <span>
          <IoMdStar className="text-warning star " />
        </span>
        <span>
          <IoMdStar className="text-warning star" />
        </span>
        <span>
          <IoMdStar className="text-warning star" />
        </span>
        <span>
          <IoMdStar className="text-warning star" />
        </span>{" "}
        <br />
        <NavLink className="text-primary info">Seller information</NavLink>
        <br />
        <br />
        <p>
          {" "}
          <strong>Product Details:</strong> <br />
          1. Lorem ipsum dolor sit amet, consectetur adipiscing.
          <br />
          2. Proin nec sem a nisl auctor laoreet.
          <br />
          3. Phasellus et rutrum magna. Nullam ut accumsan.
        </p>
      </div>
      <div className=" grid-item ">
        <div className="cartitem">
          <h2 className="more">More Buy Options</h2>
          <hr />
          <div>
            <span className="text-primary px-4 fw-bold">Seller Two</span>{" "}
            <span>$88.00</span>{" "}
            <span>
              <BsFillCartFill className="text-primary crtbtn " />
            </span>
            <p className="px-4 free">Free Shipping(standard)</p>
          </div>
          <div>
            <span className="text-primary px-4 fw-bold">Seller Two</span>{" "}
            <span>$88.00</span>{" "}
            <span>
              <BsFillCartFill className="text-primary crtbtn " />
            </span>
            <p className="px-4 free">Free Shipping(standard)</p>
          </div>
          <hr />
          <p className="text-primary px-4 fw-bold offer">
            4 offers starting at $85.00
          </p>
        </div>
        <div className="mt-4">
          <span>
            <BsBoxSeam className="fs-3 " />
          </span>{" "}
          <span>Free Shipping: Delivered by 14 Oct</span> <br />
          <span>
            <RiTruckLine className="fs-3 " />
          </span>{" "}
          <span>
            Express Shipping: Delivered by 11 Oct <br /> Select Express
          </span>{" "}
          <br />
          <span>
            <RiTruckLine className="fs-3 " />
          </span>{" "}
          <span>Free Shipping: Delivered by 14 Oct</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
