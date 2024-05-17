import './Cart.css';
import image from "../../img/about.jpg"

function Cart() {
  return (
    <>
      <div className="content_card">
        <div className="content_img">
          <img src={image} alt="" />
        </div>
        <div className="sec_desc content_desc">shoes
        </div>
        <h3 className="sec_tit com_tit">shoes</h3>
      </div>
    </>
  );
}

export default Cart;