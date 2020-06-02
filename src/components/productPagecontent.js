import React from 'react';

const Product = ({name,description,price,image}) => {
    return (
        <div className="card">
         <img src={image} alt="Image of product" className="MenuImg" />
        <div className="container2">
            <h3 className="ProductName">{name}</h3>
            <p className="Description">{description}</p>
           <p className="price">{price}</p>
           <button className="ProductButton " type="button">Buy Now</button>
        </div>
        </div>
    )
}

export default Product;

