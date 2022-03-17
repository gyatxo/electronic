import React from 'react'
import ItemAddDec from './ItemAddDec';

function Cart(props) {
    const {userItem,removeCartItem}= props;
    
    // console.log(props)
    let total = 0;
  return (
    <div className="cart-list">
                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-header bg-transparent border-dark">Items-added</div>
                  {userItem.map((item) => (
                    <div key={item.id} className="card-body cart-card">
                      <div className="cart-img">
                        <img
                          src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                          alt="laptop"
                        />
                      </div>

                      <div className="cart-name">
                        <span style={{ display: "none" }}>
                          {(total += item.price.slice(1, item.price.length) * 119 * item.count)}
                        </span>
                        <p>{item.name}</p>
                        <span>Rs {item.price.slice(1, item.price.length) * 119}</span>
                      </div>

                      <div className="cart-stock">
                      {/* <ItemAddDec  productCount={productCount} setProductCount={setProductCount}/> */}
                        <span>item : {item.count}</span>
                        <button
                          onClick={() => {
                            removeCartItem(item);
                          }}
                          className="cart-remove"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="card-footer bg-transparent border-dark cart-bottom">
                    <p>Total Amount: Rs {total}</p>
                    <button className="checkout-btn">Checkout</button>
                  </div>
                </div>
              </div>
  )
}

export default Cart