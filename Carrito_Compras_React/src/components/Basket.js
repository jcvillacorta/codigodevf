import React from 'react'

function Basket(props) {
    const {cartItems, onAdd, onRemove, borrarTodo} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice =  itemsPrice + taxPrice + shippingPrice;
    return (
       <>
        <h1>Carrito</h1>
       <div className="mb-4">
           {cartItems.length === 0 ? <div>El carrito está vacío</div> : 
            <div className="text-end">
               <button onClick={()=>borrarTodo()} className="btn btn-danger">Borrar todo</button>
            </div>
           }
           
       </div>
       {cartItems.map((item) => (
           <div key={item.id} className="row ms-2 mt-3 mb-3">
               <div className="col mt-1">{item.name}</div>
               <div className="col text-center">
                   <button onClick={()=>onAdd(item)} className="btn btn-primary">+</button>
                   <button onClick={()=>onRemove(item)} className="btn btn-danger">-</button>
               </div>
               <div className="col mt-1 text-end">
                   {item.qty} x S/{item.price.toFixed(2)}
               </div>
           </div>
       ))}
       {cartItems.length !==0 && (
           <>
            <hr/>
            <div className="row ms-2">
                <div className="col mt-1">Items Price:</div>
                <div  className="col text-end">S/{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row ms-2">
                <div className="col mt-1">Tax Price:</div>
                <div className="col text-end">S/{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row ms-2">
                <div className="col mt-1">Shipping Price:</div>
                <div className="col text-end">S/{shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row ms-2 mt-3 mb-3">
                <div className="col mt-1"><strong>Total Price:</strong></div>
                <div className="col text-end"><strong>S/{totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr/>
            <div className="text-end"><button className="btn btn-primary" onClick={() => alert("Implementar Checkout")}>Checkout</button></div>
           </>
       )}
       </>
    )
}

export default Basket