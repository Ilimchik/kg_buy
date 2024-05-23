import './Home.css';
import Title from '../../Components/Title/Title';
import CategoryList from "../../Components/CategoryList/CategoryList";
import AllProducts from '../../Components/AllProducts/AllProducts';

function Home() {

  return (
    <>
      <div className="HomeContent flex">
          <CategoryList />
          <Title><p className='HomeTit'>Products</p></Title>
          <AllProducts/>
      </div>
    </>
  );
}

export default Home;