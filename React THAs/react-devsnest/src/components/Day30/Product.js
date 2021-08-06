import React from 'react';

function Product({ data }) {
  return (
    <div className='card product-card'>
      {/* {JSON.stringify(data)} */}
      <div className='product-card-img'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='product-card-info'>
        <p className='product-card-info-title'>{data.title}</p>
        <p className='product-card-info-price'>
          <span>Price: </span>
          {data.price}
        </p>
      </div>
    </div>
  );
}

export default Product;
