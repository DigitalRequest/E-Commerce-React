import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../routes/Product";

const ProductPopup = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {visible ?
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title has-text-warning-dark">New Product!!!</p>
                            <button className="delete" aria-label="close" onClick={() => setVisible(false)}></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="columns">
                                <div className="column is-half">
                                    <img src="https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SX425_.jpg" alt="Product 1" />
                                </div>
                                <div className="column is-half is-flex is-flex-direction-column is-justify-content-space-evenly">
                                    <h1 className="title">{props.name}</h1>
                                    <p className="subtitle">${props.price}</p>
                                    <p>Description: {props.description}</p>
                                    <p>Available Colors:
                                        <span className="color-option" data-color="red">Red</span>,
                                        <span className="color-option" data-color="blue">Blue</span>,
                                        <span className="color-option" data-color="green">Green</span>
                                    </p>
                                    <div className="field has-addons">
                                        <p className="control">
                                            <input className="input" type="number" min="1" value="1" />
                                        </p>
                                        <p className="control">
                                            <button className="button is-primary add-to-cart">Add to Cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot is-flex is-justify-content-space-evenly">
                            <button className="button is-success">Save changes</button>
                            <button className="button" aria-label="close">Cancel</button>
                            <Link
                                to="/products"
                                state={{
                                    name: props.name,
                                    price: props.price,
                                    description: props.description
                                }}
                                element={<Product />} className="button is-primary is-align-self-flex-end">Buy Now</Link>
                        </footer>
                    </div>
                </div>
                :
                <></>
            }
        </>
    );
}

ProductPopup.defaultProps = {
    name: "Product Name",
    price: 99.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut, architecto eaque aperiam sequi ipsam!"
}

export default ProductPopup;