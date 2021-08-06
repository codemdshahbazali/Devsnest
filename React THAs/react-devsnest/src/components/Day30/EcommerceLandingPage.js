import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getData } from './slices/ecommerDataSlice';

function EcommerceLandingPage() {
  const dispatch = useDispatch();
  const { productsData, loading, errorMessage } = useSelector(
    (state) => state.productData
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <div className='product-listing'>Product Listing</div>
      <div className='container-fluid product-container'>
        {loading ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : !errorMessage ? (
          productsData?.map((data, index) => (
            <Product data={data} key={index} />
          ))
        ) : (
          <div className='alert alert-danger' role='alert'>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default EcommerceLandingPage;
