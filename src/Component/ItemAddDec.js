import React from 'react'

function ItemAddDec(props) {
    const {stock, productCount, setProductCount, increaseProduct,decreaseProduct}=props

    // const handleChange=(e)=>{
    //     e.preventDefault()
    //     setProductCount=e.target.value;
    // }

    // const increaseProduct = () =>{
    //   productCount === stock ? setProductCount(productCount) : setProductCount(productCount+1);
    // }
  
    // const decreaseProduct = () =>{
    //   productCount === 0 ? setProductCount(productCount) : setProductCount(productCount-1);
    // }
  return (
    <div className="card-adder">
        <button  onClick={decreaseProduct} className="dec">-</button>
        <input type="number" min={0} disabled value={productCount} />
        <button onClick={increaseProduct} className="inc" >+</button>
      </div>
  )
}

export default ItemAddDec