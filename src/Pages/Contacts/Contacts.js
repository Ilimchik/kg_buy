import './Contacts.css';
import { Link } from "react-router-dom";
import inst_ic from "../../img/instagram_ic.png"
import facebook_ic from "../../img/facebook_ic.png"
import x_ic from "../../img/x-ic.png"

function Contacts() {
  return (
    <section className="Contacts">
      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-2">Location</h2>
          <p>Karakol,Kyrgyzstan</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+996559126888">996559126888  /  </a>
            <a href="tel:+996559126888">996559126888</a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Email</h2>
          <p>
            <a href="mailto:ilimbork@gmail.com">
              ilimbork@gmail.com
            </a>
          </p>
        </li>
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
      </ul>
    </section>
  );
}

export default Contacts;