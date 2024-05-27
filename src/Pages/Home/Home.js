import './Home.css';
import CategoryList from "../../Components/CategoryList/CategoryList";
import BestSellers from "../../Components/BestSellers/BestSellers";
import AppleProducts from "../../Components/AppleProducts/AppleProducts";
import XiaomiProducts from "../../Components/XiaomiProducts/XiaomiProducts"

function Home() {

  return (
    <>
      <div className="HomeContent flex">
          <CategoryList />
          <BestSellers />
          <AppleProducts />
          <XiaomiProducts />
      </div>
    </>
  );
}

export default Home;