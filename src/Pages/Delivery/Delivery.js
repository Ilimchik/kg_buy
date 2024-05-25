import './Delivery.css';
import image1 from '../../img/del-img.jpeg'


function Delivery() {
  return (
    <section className="Delivery flex">

      <div className="DelCard">
        <img className='DelImg' src={image1} alt="" />
        <div className="DelTxt">Receive your orders at lightning speed! Our delivery service ensures prompt dispatch and fast delivery right to your doorstep. Whether you need food, household goods or gifts, we will do our best to ensure your order arrives as quickly and safely as possible.</div>
      </div>


      <div className="DelCard">
        <img className='DelImg' src={image1} alt="" />
        <div className="DelTxt">Join our green delivery initiative! We're committed to making the world a better place, starting with reducing the carbon footprint of our deliveries. We use electric vehicles, biodegradable packaging and optimized delivery routes to reduce our environmental impact. Order today and together we will take a step towards a greener future!</div>
      </div>
      <div className="DelCard">
        <img className='DelImg' src={image1} alt="" />
        <div className="DelTxt">Allow yourself the luxury of premium delivery! Our delivery team will provide you with the highest level of service, whether you are in the office or at home. Personal couriers, exclusive packaging and flexible delivery schedules are available to you. Enjoy convenience and luxury with our premium delivery - because you deserve only the best!</div>
      </div>
    </section>
  );
}

export default Delivery;