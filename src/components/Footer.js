import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container text-white p-5">
      <div>
        <p>1800 2522 566</p>
        <p>customercare@omcjfd.com</p>
        <p>Address 1 line 1 line2</p>

        <br />

        <p>
          <strong>PAYMENT METHODS</strong>{" "}
        </p>
        <BsCreditCard2Front className="pay" />
        <FaCcVisa className="pay" />
        <BsCreditCard2Back className="pay" />
        <BsCreditCardFill className="pay" />
        <BsFillCreditCard2FrontFill className="pay" />
      </div>
      <div>
        <p>
          <strong>COMPANY</strong>{" "}
        </p>
        <p>About us</p>
        <p>Sell with us</p>
        <p>Our sellers</p>
      </div>
      <div>
        <p>
          <strong>INFORMATION</strong>{" "}
        </p>
        <p>Privacy Policy</p>
        <p>Exchange and return policy</p>
        <p>Terms and Condtions</p>
        <p>Common questions</p>
      </div>
      <div>
        <p>
          <strong>SUBSCRIBE NEWS LETTER</strong>{" "}
        </p>
        <input
          type="text"
          className="bg-white searchInp"
          placeholder="enter your email"
        />
        <button className="searchbtn">Submit</button>
        <br />
        <br />
        <div className="iconfooter">
          <AiFillFacebook className="fi" />
          <IoLogoYoutube className="fi" />
          <AiFillLinkedin className="fi" />
          <AiFillTwitterSquare className="fi" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
