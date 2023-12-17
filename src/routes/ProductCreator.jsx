import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../Firebase';

const ProductCreator = () => {
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            const uploadFile = async () => {
                if (image === null) {
                    console.log("Please select an image");
                    return null;
                }

                const imageRef = storageRef(storage, `/products/${uuidv4()}`);

                try {
                    const snapshot = await uploadBytes(imageRef, image);
                    const url = await getDownloadURL(snapshot.ref);
                    return url;
                } catch (error) {
                    console.error(error.message);
                    return null;
                }
            };

            const imageFile = await uploadFile();

            const priceInt = parseFloat(price);
            const ratingInt = parseInt(rating);

            const docRef = await addDoc(collection(db, 'Products'), {
                name: productName,
                price: priceInt,
                description: description,
                rating: ratingInt,
                image: imageFile,
            });

            console.log('Document written with ID: ', docRef.id);

            navigate("/");
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <>
            <div className="modal is-active">
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add Product</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="field">
                                <label className="label">Product Name</label>
                                <div className="control">
                                    <input id="ProductName" value={productName} onChange={(e) => setProductName(e.target.value)} className="input" type="text" placeholder="Enter product name" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input id="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="input" type="number" placeholder="Enter price" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea id="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea" placeholder="Enter product description"></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Rating</label>
                                <div className="control">
                                    <input id="Rating" value={rating} onChange={(e) => setRating(e.target.value)} className="input" type="number" step="0.1" min="0" max="5" placeholder="Enter product rating" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Image File</label>
                                <div className="control">
                                    <input id="Image" className="input" type="file" accept="image/*" onChange={handleImageChange} />
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" type="submit">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button" aria-label="close" onClick={handleCancel}>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default ProductCreator;