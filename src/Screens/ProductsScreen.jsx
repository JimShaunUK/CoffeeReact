import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from '../Components/Product'
import Loader from '../Components/Loader'
import axios from 'axios'
//import products from '../data/products'

function ProductsScreen() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        //setProducts1(products)

         const fetchProducts = async () => {
             const { data } = await axios.get('https://localhost:44345/api/products')
             setProducts(data)
         }
 
         fetchProducts()
         
    })



    return (
        <div>
              <Container>
            <h1 className="mt-3">Products</h1>
            <h1 className="py-3">Latest Products</h1>
            {products.length ===0 ? (<Loader />) : (
             <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4}>
                        <Product product={product} />
                    </Col>
                ))}

            </Row>
            )}
            </Container>
        </div>
    )
}

export default ProductsScreen
