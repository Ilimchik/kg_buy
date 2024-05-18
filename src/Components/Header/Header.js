import "./Header.css";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

// const { data, isLoading } = useGetProductsQuery({ title: searchValue });
// const [searchValue, setSearchValue] = useState("");


export default function HeaderSection() {

  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <form className={styles.form}>
            <div className={styles.icon}>
              <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
              </svg>
            </div>
            <div className={styles.input}>
              <input
                type="search"
                name="search"
                placeholder="Search"
                autoComplete="off"
                // onChange={handleSearch}
                // value={searchValue}
              />
            </div>

            {/* {searchValue && (
              <div className={styles.box}>
                {isLoading
                  ? "Loading"
                  : !data.length
                    ? "No results"
                    : data.map(({ title, images, id }) => {
                      return (
                        <Link
                          key={id}
                          onClick={() => setSearchValue("")}
                          className={styles.item}
                          to={`/products/${id}`}
                        >
                          <div
                            className={styles.image}
                            style={{ backgroundImage: `url(${images[0]})` }}
                          />
                          <div className={styles.title}>{title}</div>
                        </Link>
                      );
                    })}
              </div>
            )} */}
          </form>
          <div className="buttons flex">
            <Auth />
            <CartLink />
          </div>
        </div>
      </div>
    </header>
  )

}