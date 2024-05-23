import "./Category.css"
import { useMatch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProductList from "../../Components/ProductList/ProductList";
import CategoryList from "../../Components/CategoryList/CategoryList";


export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const { categories } = useContext(AppContext);

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
        <CategoryList />
      <h2 className="categoryName">{category.name}</h2>
      <ProductList category={category} />
    </div>
  )
}