import React, { useContext } from 'react'
import ProductHd from '../components/ProductHd';
import {useParams} from 'react-router-dom';
import {ShopContext} from '../contexts/ShopContext';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';

function Product() {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find(p => p.id === Number(productId));

  if(!product) return <div>Product Not Found</div>;

  return (
    <section className='max_padd_container py-28 '>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription />
      </div>
    </section>
  )
}

export default Product