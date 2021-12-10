import React from 'react'
import Product from './Product';

function Main(props) {
    const {products, onAdd} = props;
    return (
        <main>
          <h1>Productos</h1>
          <div className="row">
            {products.map((product) => (
              <Product key={product.id} product={product} onAdd={onAdd}/>
            ) )}
          </div>
        </main>
    )
}

export default Main