import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.container}>
          <div className={styles.snobella}>
            <h2>Snobella</h2>
          </div>
          <div className={styles.snobellatitle}>
            <div className={styles.lefttitle}>
              <p>
                The wise man therefore always holds selectionThe wise man
                therefore always rejects pleasures to secure other greater
              </p>
              <p>Snobella@gmail.com</p>
              <p>+748 383 23 14</p>
            </div>
            <div className={styles.righttitle}>
              <ul>
                <li>
                  {" "}
                  <strong>Shop</strong>
                </li>
                <li>Shop</li>
                <li>Shoulder Bag</li>
                <li>Backpack</li>
                <li>Tote Bag</li>
                <li>Hand Bag</li>
                <li>Evening bags</li>
                <li>Purse</li>
              </ul>
            </div>
            <div className={styles.righttitle}>
              <ul>
                <li>
                  {" "}
                  <strong>Company</strong>
                </li>
                <li>About us</li>
                <li>Contact</li>
                <li>Terms of Use</li>
                <li>Customer service</li>
              </ul>
            </div>
            <div className={styles.righttitle}>
              <ul>
                <li>
                  {" "}
                  <strong>Help</strong>
                </li>
                <li>FAQ</li>
                <li>Delivery</li>
                <li>Cancellation of the order</li>
                <li>Don't go back</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerend}>
            <div className={styles.ended}>
              <p>© 2020. All rights reserved.</p>
            </div>
            <div className="endedicon">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon color="error" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon color="success" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
