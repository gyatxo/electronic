
import { useState } from "react";
import ItemAddDec from "./ItemAddDec";

export default function ProductCard(props) {
  const [productCount,setProductCount] = useState(0);


    const {productName,price,stock,imgName,category,id,product,productDate,countItem, setCountItem, userItem,setUserItem} = props;
// console.log(setCountItem);

const increaseProduct = () =>{
  productCount === stock ? setProductCount(productCount) : setProductCount(productCount+1);
}

const decreaseProduct = () =>{
  productCount === 0 ? setProductCount(productCount) : setProductCount(productCount-1);
}


    const addToCart =(addedItem,count)=> {
        // console.log(addedItem,count)
        const index = userItem.findIndex((product)=> product.id===addedItem.id)
        // console.log(index)
        if (index < 0) {
          addedItem.count = count;
          setUserItem([...userItem, addedItem]);
        } else {
          userItem[index].count += count;
          setUserItem([...userItem]);
        }
        setCountItem(countItem + count);
    }

    let newPrice = price.slice(1,price.length);
    let nepaliPrice = Number(newPrice) * 119;

    let imgSrc = `https://electronic-ecommerce.herokuapp.com/${imgName}`
  return (
    
    <div className="card" style={{ width: "18rem" }}>
    <div className="card-img">
      <img
        src = {imgSrc} 
        className="card-img-top"
        alt="laptop"
      />
    </div>

    <ItemAddDec productCount={productCount} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct}/>
    
    <div className="card-body">
      <div className="card-description">
        <p>{productName}</p>
        <div className="card-price">
          <p>Rs: {nepaliPrice}</p>
          <span>Stocks left: {stock}</span>
        </div>
        <p>Released on: {new Date(productDate).toString().slice(0,15)}</p>
      </div>

      <button onClick={()=>{addToCart(product,productCount)}} className="btn btn-primary addBtn">Add to Cart</button>
    </div>
  </div>
    
  );
}
