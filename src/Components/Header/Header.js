import "./Header.css";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

// const { data, isLoading } = useGetProductsQuery({ title: searchValue });
// const [searchValue, setSearchValue] = useState("");


export default function HeaderSection() {

  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <div className="buttons flex">
            <Auth />
            <CartLink />
          </div>
        </div>
      </div>
    </header>
  )

}