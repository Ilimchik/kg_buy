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
        <div className="contactMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.5995417556852!2d78.38666766015602!3d42.483087066586336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sen!2skg!4v1716635134251!5m2!1sen!2skg" width="100%" height="400" allowfullscreen="" loading="lazy" title='qwer' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
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