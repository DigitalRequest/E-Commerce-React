import Footer from "../assets/Footer";
import Navbar from "../assets/Navbar";

import { Link } from "react-router-dom";
import Product from "../routes/Product";

const DisplayItem = (props) => {
    return (
        <Link
            to={{
                pathname: `/products/${props.id}`
            }}
            state={{
                name: props.name,
                price: props.price,
                description: props.description
            }}
            children={<Product />}
            className="column container is-justify-content-center">
            <img src={props.src} alt="Product 1" />
            <p>{props.description}</p>
        </Link>
    );
}

DisplayItem.defaultProps = {
    src: "https://m.media-amazon.com/images/I/81O5aWZwIqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Product Description",
    name: "Product",
    price: 99.99,
    id: 0
}

const Home = () => {

    return (
        <>
            <Navbar />

            <section className="section">
                <div className="container">
                    <h1 className="title">Welcome to Your E-Commerce Site</h1>
                    <p className="subtitle">Discover amazing products and great deals!</p>

                    <div className="columns">
                        <DisplayItem description="This is a description for the product" />
                        <DisplayItem id="5" />
                        <DisplayItem />
                        <DisplayItem />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;