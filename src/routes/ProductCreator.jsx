const ProductCreator = () => {
    return (
        <>
            <div className="modal is-active">
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add Product</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form action="POST">
                            <div className="field">
                                <label className="label">Product Name</label>
                                <div className="control">
                                    <input id="ProductName" className="input" type="text" placeholder="Enter product name" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input id="Price" className="input" type="number" placeholder="Enter price" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea id="Description" className="textarea" placeholder="Enter product description"></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Rating</label>
                                <div className="control">
                                    <input id="Rating" className="input" type="number" step="0.1" min="0" max="5" placeholder="Enter product rating" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Image File</label>
                                <div className="control">
                                    <input id="Image" className="input" type="file" accept="image/*" />
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" type="submit">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button" aria-label="close">Cancel</button>
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