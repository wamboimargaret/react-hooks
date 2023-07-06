import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
const ProductDetails = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const details = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    details();
  }, [productId]);
  if (!product) {
    return <p>Loading ...</p>;
  }
  return (
    <div className='details'>
      <h1>Product Details</h1>
      <div className='detailstwo'>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <h4>{product.rating}</h4>
      </div>
    </div>
  );
};
export default ProductDetails;
