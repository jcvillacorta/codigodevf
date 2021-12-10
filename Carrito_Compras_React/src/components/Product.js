import React from 'react'

export default function Product({product, onAdd}) {
    return (
        <div className="col">
            <div className="card" styleName="width: 18rem;">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text"><strong>Precio:</strong> S/{product.price}</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" onClick={()=>onAdd(product)}>Añadir a Carrito</button>
            </div>
        </div>
        </div>
        
    )
}
