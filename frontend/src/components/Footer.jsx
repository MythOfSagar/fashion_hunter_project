import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="row">
          <div class="footer-col">
            <h4>Ajio</h4>
            <ul>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Join Our Team</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">We Respect Your Privacy</a>
              </li>
              <li>
                <a href="#">Fees & Payments</a>
              </li>
              <li>
                <a href="#">Returns & Refunds Policy</a>
              </li>
              <li>
                <a href="#">Promotions Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Cancellations</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Customer Care</a>
              </li>
              <li>
                <a href="#">How Do I Redeem My Coupon</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Shop by</h4>
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Indie</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Brand Directory</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Follow us</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram=AJIOlife</a>
              </li>
              <li>
                <a href="#">Instagram=AJIO LUXE</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div id="bottom-footer">
        <div id="main">
          <div>
            <p style={{marginLeft:"0px",textAlign:"left"}}>Payment Methods</p>
          </div>
          <div id="btm-left">
            <p>Net Banking</p>
            <p>Verified By Visa</p>
            <p>Master Card</p>
            <p>CASH ON DELIVERY</p>
            <p>Jio Money</p>
          </div>
        </div>
        <div id="btm-right">
          <p>Secure systems</p>
          <p>256 BIT</p>
        </div>

        <div id="f-btns">
          <button id="foot-btn">up</button>
          <button id="foot-btn1">...</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
