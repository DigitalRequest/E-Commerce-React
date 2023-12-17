import Footer from "../assets/Footer";
import Navbar from "../assets/Navbar";
import { useLocation } from "react-router-dom";

const Product = () => {

    let { state } = useLocation();

    const { name, price, description, image, rating } = state;

    const handleInputChange = (event) => {

    };

    return (
        <>
            <Navbar />

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <img src={image} alt="Product 1" width="384px" height="384px" />
                        </div>
                        <div className="column is-half is-flex is-flex-direction-column is-justify-content-space-around">
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