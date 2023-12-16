import Footer from "../assets/Footer";
import Navbar from "../assets/Navbar";
import { useLocation } from "react-router-dom";

const Product = () => {

    let { state } = useLocation();

    const { name, price, description } = state;

    const handleInputChange = (event) => {

    };

    return (
        <>
            <Navbar />

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <img src="https://m.media-amazon.com/images/I/613uANLiukL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Product 1" />
                        </div>
                        <div className="column is-half">
                            <h1 className="title">{name}</h1>
                            <p className="subtitle">${price}</p>
                            <p>Description {description}</p>
                            <p>Available Colors: Red, Blue, Green</p>
                            <div className="field has-addons">
                                <p className="control">
                                    <input className="input" type="number" min="1" value="1" onChange={handleInputChange} />
                                </p>
                                <p className="control">
                                    <button className="button is-primary">Add to Cart</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Product;