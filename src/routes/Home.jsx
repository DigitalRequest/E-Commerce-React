import React, { useEffect, useState } from "react";

import Footer from "../assets/Footer";
import Navbar from "../assets/Navbar";

import { Link } from "react-router-dom";
import Product from "../routes/Product";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const DisplayItem = (props) => {
    return (
        <Link
            to={{
                pathname: `/products/${props.id}`
            }}
            state={{
                name: props.name,
                price: props.price,
                description: props.description,
                image: props.image,
                rating: props.rating,
            }}
            children={<Product />}
            className="column container is-justify-content-center">
            <img src={props.image} alt="Product 1" width="256px" height="256px" />
            <p>{props.description}</p>
        </Link>
    );
}

DisplayItem.defaultProps = {
    image: "https://m.media-amazon.com/images/I/81O5aWZwIqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Product Description",
    name: "Product",
    price: 99.99,
    rating: 0
}

async function getData() {
    const docRef = collection(db, "Products");
    const docSnap = await getDocs(docRef);

    if (!docSnap.empty) {
        return docSnap;
    } else {
        console.log("No such document!");
        return null;
    }
}

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = collection(db, "Products");
                const docSnap = await getDocs(docRef);

                if (!docSnap.empty) {
                    const products = docSnap.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setData(products);
                } else {
                    console.log("No data found!");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <Link to="productCreator" className="button is-info is-small">Create a new product</Link>

            <section className="section">
                <div className="container">
                    <h1 className="title">Welcome to Your E-Commerce Site</h1>
                    <p className="subtitle">Discover amazing products and great deals!</p>

                    <div className="columns">
                        {data.map((product) => (
                            <DisplayItem key={product.id} {...product} />
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;