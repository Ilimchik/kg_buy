import './Home.css';
import Title from '../../Components/Title/Title';
import CategoryList from "../../Components/CategoryList/CategoryList";

function Home() {

  return (
    <>
      <div className="HomeContent flex">
          <CategoryList />
          <Title><p className='HomeTit'>Products</p></Title>
      </div>
    </>
  );
}

export default Home;