import './Home.css';
import CategoryList from "../../Components/CategoryList/CategoryList";
import BestSellers from "../../Components/BestSellers/BestSellers";
import AppleProducts from "../../Components/AppleProducts/AppleProducts"

function Home() {

  return (
    <>
      <div className="HomeContent flex">
          <CategoryList />
          <BestSellers />
          <AppleProducts />
      </div>
    </>
  );
}

export default Home;