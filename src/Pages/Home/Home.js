import './Home.css';
import Card from '../../Components/Card/Card';
import Title from '../../Components/Title/Title';
import CategoryList from "../../Components/CategoryList/CategoryList";



function Home() {
  return (
    <>
      <Title><p className='HomeTit'>Products</p></Title>
      <div className="HomeContent flex">
        <aside className='HomeAside'>
          <CategoryList />
        </aside>
        <Card />
      </div>
    </>
  );
}

export default Home;