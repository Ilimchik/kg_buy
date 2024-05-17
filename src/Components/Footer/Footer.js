import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";
import inst_ic from "../../img/instagram_ic.png"
import facebook_ic from "../../img/facebook_ic.png"
import x_ic from "../../img/x-ic.png"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <div className="Foot_menu">
            <p className="Foot_tit">Menu</p>
            <div className="Foot_menu-in flex">
              <Menu />
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit">Links</p>
            <div className="Foot_links flex">
              <Link className="Foot_link Foot_link__inst">
                <img src={inst_ic} alt="" />
              </Link>
              <Link className="Foot_link Foot_link__fb">
                <img src={facebook_ic} alt="" />
              </Link>
              <Link className="Foot_link Foot_link__tw">
                <img src={x_ic} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="Foot_bot">
          <p>
            More ways to shop: Find an our real Store or other retailer near you.
            We don't have real store 
          </p>
          <p>Copyright © 2024 Ilim Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
