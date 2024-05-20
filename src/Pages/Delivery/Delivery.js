import './Delivery.css';
import image from '../../img/del_icon.png'

function Delivery() {
  return (
    <section className="Delivery flex">
      <div className="DelCard">
        <img className='DelImg' src={image} alt="" />
        <div className="DelTxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora suscipit adipisci ad ab, molestiae, voluptate error atque officiis similique tenetur quisquam non et reiciendis.</div>
      </div>
      <div className="DelCard">
        <img className='DelImg' src={image} alt="" />
        <div className="DelTxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora suscipit adipisci ad ab, molestiae, voluptate error atque officiis similique tenetur quisquam non et reiciendis.</div>
      </div>
      <div className="DelCard">
        <img className='DelImg' src={image} alt="" />
        <div className="DelTxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora suscipit adipisci ad ab, molestiae, voluptate error atque officiis similique tenetur quisquam non et reiciendis.</div>
      </div>
    </section>
  );
}

export default Delivery;