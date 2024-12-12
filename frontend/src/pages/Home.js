import React, { Fragment, useEffect, useState } from 'react' ;
import ProductCard from '../components/ProductCard' ;
import { useSearchParams } from 'react-router-dom';

export default function
    () {
        const [products, setProducts] =useState([]);

        const [searchParams, setSearchparams] = useSearchParams();

        useEffect(() => {
            fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
            .then(res =>res.json())
            .then( res => setProducts(res.products))
        },[searchParams])

    return (
        <Fragment>
            <section className='banner'>
            <h1 id="products_heading">Latest Products</h1>
            </section>
            <section id="products" className="container mt-5">
                <div className="row product-list">
                    {products.map(product => <ProductCard  product={product}/>)}
                </div>
            </section>
        </Fragment>
    )
}
