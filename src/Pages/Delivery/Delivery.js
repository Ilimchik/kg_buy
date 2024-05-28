import './Delivery.css';
import image1 from '../../img/del-img_1.jpeg';
import image2 from '../../img/del-img_2.jpg';
import image3 from '../../img/del-img_3.jpg';
import image4 from '../../img/del-img_4.jpg'

import Title from "../../Components/Title/Title"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';

function Delivery() {
  return (
    <>
      <section className="Delivery flex">
      <Title>Delivery Page</Title>

        <Swiper
          Parallax
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>

            <div className="DelCard">
              <img className='DelImg' src={image1} alt="" />
              <div className="DelTxt">Receive your orders at lightning speed! Our delivery service ensures prompt dispatch and fast delivery right to your doorstep. Whether you need food, household goods or gifts, we will do our best to ensure your order arrives as quickly and safely as possible.</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="DelCard">
              <img className='DelImg' src={image2} alt="" />
              <div className="DelTxt">Join our green delivery initiative! We're committed to making the world a better place, starting with reducing the carbon footprint of our deliveries. We use electric vehicles, biodegradable packaging and optimized delivery routes to reduce our environmental impact. Order today and together we will take a step towards a greener future!</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="DelCard">
              <img className='DelImg' src={image3} alt="" />
              <div className="DelTxt">Allow yourself the luxury of premium delivery! Our delivery team will provide you with the highest level of service, whether you are in the office or at home. Personal couriers, exclusive packaging and flexible delivery schedules are available to you. Enjoy convenience and luxury with our premium delivery - because you deserve only the best!</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="DelCard">
              <img className='DelImg' src={image4} alt="" />
              <div className="DelTxt">Allow yourself the luxury of premium delivery! Our delivery team will provide you with the highest level of service, whether you are in the office or at home. Personal couriers, exclusive packaging and flexible delivery schedules are available to you. Enjoy convenience and luxury with our premium delivery - because you deserve only the best!</div>
            </div>
          </SwiperSlide>
        </Swiper>



      </section>
    </>
  );
}

export default Delivery;