import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

export const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
      await fetch('http://localhost:4000/removeproduct', {
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify({id:id})
      })
      await fetchInfo();
    }

    return (
        <div className='listproduct'>
            <h1>Lista de productos</h1>
            <div className="listproducts-format-main">
                <p>Producto</p>
                <p>Título</p>
                <p>Precio Antiguo</p>
                <p>Precio Nuevo</p>
                <p>Categoría</p>
                <p>Eliminar</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product, index) => (
                    <>
                    <div key={index} className="listproduct-format-main">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
                    </div>
                    <hr />
                    </>
                ))}
            </div>
        </div>
    );
};
