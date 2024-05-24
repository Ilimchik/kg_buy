import './Home.css';
import CategoryList from "../../Components/CategoryList/CategoryList";
import BestSellers from "../../Components/BestSellers/BestSellers";

function Home() {

  return (
    <>
      <div className="HomeContent flex">
          <CategoryList />
          <BestSellers />
      </div>
    </>
  );
}

export default Home;