import "./BestSellers.css"
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import Title from "../Title/Title";

export default function AllProducts({ sellers }) {

    const { products } = useContext(AppContext);
    const output = products.filter(product => product.name && product.bestseller === true)
        .map(product => (
            <div key={product.id} className="product">
                <Link to={"/products/" + product.slug}>
                    <img src={product.picture} alt={product.name} />
                </Link>
                <hr />
                <Link to={"/products/" + product.slug} className="text">
                    {product.name}
                </Link>

                <br />

                <div className="actions">

                    <span>${product.price}</span>
                    <AddToCart product={product} />
                </div>
                <DeleteProduct product={product} />
            </div>
        )
        );

    return (
        <div className="ProductList">
            <Title>Best Sellers</Title>
            <div className="Products">
                {output}
                <AddProduct sellers={sellers} />
            </div>
        </div>
    )






}