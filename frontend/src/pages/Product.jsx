import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Breadcrum } from '../components/Breadcrums/breadcrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  console.log('productId:', productId); // Verificar el ID del producto
  const product = all_product.find((e) => e.id === Number(productId));

  console.log('product:', product); // Verificar el producto encontrado

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  );
};
