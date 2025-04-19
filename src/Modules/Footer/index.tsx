import React from "react";
import usa from "../assets/usa.png";
import gpay from "../assets/GPay.png";
import red from "../assets/red.png";
import pay from "../assets/pay.png";
import amex from "../assets/amex.png";
import applePay from "../assets/applePay.png";
import paytm from "../assets/pay1.png";
import CustomInput from "../../Components/Input.";
import CustomButton from "../../Components/Button";
import "./index.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-grid">
        <div className="subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="input-group">
            <CustomInput
              type="email"
              placeholder="Enter your e-mail..."
              inputColor="#fff"
              placeholderColor="#888"
            />
            <CustomButton
              text="SUBSCRIBE"
              outline={true}
              color="#fff"
              borderColor="#444"
            />{" "}
          </div>
        </div>
        <div className="contact">
          <h4 style={{ marginBottom: "0px" }}>CONTACT US</h4>
          <p style={{ marginBottom: "0px" }}>+44 221 133 5360</p>
          <p style={{ marginBottom: "0px" }}>customercare@mettamuse.com</p>
          <h4 style={{ marginBottom: "10px" }}>CURRENCY</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <img
              style={{ marginRight: "5px" }}
              src={usa}
              className="usa"
              alt="dollar"
            />
            <span style={{ marginTop: "-5px", fontWeight: "bolder" }}> . </span>{" "}
            <span style={{ marginTop: "3px", marginLeft: "5px" }}> USD</span>
          </div>
          <small style={{ fontSize: "10px" }}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      <div className="footer-bottom-grid">
        <div className="grid-section-head">
          <div className="grid-section">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="grid-section">
            <div>
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-section">
          <h4>FOLLOW US</h4>
          <p>mettā muse ACCEPTS</p>
          <div className="payments">
            <img className="img-pay" src={gpay} alt="GPay" />
            <img className="img-pay" src={red} alt="Mastercard" />
            <img className="img-pay" src={pay} alt="PayPal" />
            <img className="img-pay" src={amex} alt="Amex" />
            <img className="img-pay" src={applePay} alt="Apple Pay" />
            <img className="img-pay" src={paytm} alt="Paytm" />
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;