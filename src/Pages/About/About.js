import Title from '../../Components/Title/Title';
import './About.css';
import About_img from '../../img/About_img.jpg'


function About() {
  return (
    <section className="About">
      <Title>About Us</Title>
      <div className="About_in flex">
        <div className="About_txt">
          <p>
            Welcome to our online store, your digital doorway to a world of convenience and choice. Here, you'll find a treasure trove of products tailored to your every need and desire. Whether you're searching for the latest gadgets, fashionable apparel, or essential household items, we've got you covered.
          </p>
        </div>
        <div className="About_img">
          <img src={About_img} alt="" />
        </div>
      </div>
      <div className="About_bot">
        <p>Shopping with us is not just about acquiring products; it's about experiencing seamless service and unparalleled convenience. Our user-friendly interface ensures smooth navigation, while secure payment gateways guarantee a safe and hassle-free transaction process. Whether you're shopping on your desktop, tablet, or smartphone, our website is optimized for seamless performance across all devices.
        </p>
      </div>
    </section>
  );
}

export default About;