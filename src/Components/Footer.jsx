import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const FooterPart = () => {
  return (
    <div id={styles.fooTerdivs}>
      <div id={styles.fooTer}>
        <h1 className={styles.H1}>Beauty Bebo</h1>
        <div className={styles.footerGrid}>
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Contact us</a>
            </p>
            <p>
              <a href="/">Track Order</a>
            </p>
            <p>
              <a href="/">Return Order</a>
            </p>
            <p>
              <a href="/">Cancel Order</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're Hiring</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <p>
              <a href="/">4.7M People Like this</a>
            </p>
            <p>
              <a href="/">1M Followers</a>
            </p>
          </div>
          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className={styles.inpbtnFlex}>
              <input placeholder="Enter Email id" />
              <button className={styles.bTTn}>Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          <div>
            <h4>DOWNLOAD THE APP</h4>
            <div id={styles.imgDivmain}>
              {/* //overflow={"hidden"} w="95%"  m="auto" mt={{base:"70px",lg:"190px"}} h={{base:"350px",lg:"auto"}} */}
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.footerGrid} id={styles.footerGrid}>
          <div>
            <h3>
              <NavLink to="/men">Makeup</NavLink>
            </h3>
            <p>
              <NavLink to="/men">BB Cream</NavLink>
            </p>
            <p>
              <NavLink to="/men">Blush</NavLink>
            </p>
            <p>
              <NavLink to="/men">Bronzers</NavLink>
            </p>
            <p>
              <NavLink to="/men">CC Cream</NavLink>
            </p>
            <p>
              <NavLink to="/men">Contour</NavLink>
            </p>
            <p>
              <NavLink to="/men">Concealer</NavLink>
            </p>
            <p>
              <NavLink to="/men">Compact & Powder</NavLink>
            </p>
            <p>
              <NavLink to="/men">Face Primer</NavLink>
            </p>
            <p>
              <NavLink to="/men">Foundation</NavLink>
            </p>
            
          </div>
          <div>
            <h3>
              <NavLink to="/women">Skin</NavLink>
            </h3>
            <p>
              <NavLink to="/women">Anti- Ageing Creams</NavLink>
            </p>
            <p>
              <NavLink to="/women">Bleach Creams</NavLink>
            </p>
            <p>
              <NavLink to="/women">Brightening Cream</NavLink>
            </p>
            <p>
              <NavLink to="/women">Face Wash</NavLink>
            </p>
            <p>
              <NavLink to="/women">Facial Wipes</NavLink>
            </p>
            <p>
              <NavLink to="/women">Face Oil</NavLink>
            </p>
            <p>
              <NavLink to="/women">Face Cleansers</NavLink>
            </p>
            <p>
              <NavLink to="/women">Facial Kits</NavLink>
            </p>
            <p>
              <NavLink to="/women">Face Tools</NavLink>
            </p>
       
          </div>
          <div>
            <h3 >
              <a href="/">Personal Care</a>
            </h3>
            <p>
              <a href="/">Body Cleansers</a>
            </p>
            <p>
              <a href="/">Body Massage Oil</a>
            </p>
            <p>
              <a href="/">Body Wash</a>
            </p>
            <p>
              <a href="/">Creams</a>
            </p>
            <p>
              <a href="/">Essential Oils</a>
            </p>
            <p>
              <a href="/">Foot Cream</a>
            </p>
            <p>
              <a href="/">Bath Brushes</a>
            </p>
            <p>
              <a href="/">Loofahs</a>
            </p>
            <p>
              <a href="/">Shower Caps</a>
            </p>
          </div>
          <div className={styles.footerEnd}>
            <h4>
              <a href="/">FANBOOK</a>
            </h4>
            <h4>
              <a href="/">OFFERS</a>
            </h4>
            <h4>
              <a href="/">SITEMAP</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPart;
