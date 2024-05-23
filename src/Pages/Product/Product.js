import "./Product.css"
import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product flex">
      <div className="productImg" >
        <img src={product.picture} alt={product.name} />
      </div>
      <div>
        <h1 className="productTit">{product.name}</h1>
        <p className="ProductPrice"><strong>Price:</strong> {product.price}$</p>
        <p className="ProductDescriptoin"><strong>Description: </strong>{product.description}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}