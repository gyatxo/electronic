import { useState, useEffect } from 'react'
import Cart from './Cart'
import Filter from './Filter'
import axios from "axios";
import ProductCard from './ProductCard'


function ProductPage(props) {
    const [userItem, setUserItem]= useState([]);
    const [productList, setProductList]= useState([])
    const [filterItem, setFilterItem]= useState([])
    const{showCart,setShowCart,countItem,setCountItem}=props;

// console.log(productList)
const removeCartItem = (product) => {
  let cartItems = userItem.filter((item) => {
    return item.id !== product.id;
  });
  setUserItem(cartItems);
  setCountItem(countItem - product.count);
};

const fetchProduct = async () =>{
    const response = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
  
    if(response?.data?.data?.product){
      setProductList(response.data.data.product)
      setFilterItem(response.data.data.product)
    }
}


  useEffect(()=>{
  fetchProduct()
  },[])

  const applyFilter = () => {
    let selectorValue = document.getElementById("filter-select").value;
    let minValue = document.getElementById("filter-min").value;
    let maxValue = document.getElementById("filter-max").value;
    let filteredProduct;

    if (selectorValue !== null && minValue !== "" && maxValue !== "") {
      filteredProduct = filterItem.filter((product) => {
        let newPrice = product.price.slice(1, product.price.length);
        let nepaliPrice = Number(newPrice) * 119;
        return (
          (nepaliPrice >= minValue && nepaliPrice) <= maxValue &&
          product.category[1] === selectorValue
        );
      });
    } else if (selectorValue) {
      filteredProduct = filterItem.filter((product) => {
        return product.category[1] === selectorValue;
      });
    }
    setProductList(filteredProduct);
  };


      return (
    <>
    {showCart ? (
        <div className="product-container">
          
            
              <Cart userItem={userItem} removeCartItem={removeCartItem} />

              <div className="product-header">
                <h4 className="product-title">Products</h4>
                <button className="product-btn">
                  {" "}
                  <i className="bi bi-funnel-fill"></i>Filter
                </button>
              </div>

              <div className="row product-row">
                {productList.map((product) => (
                  <div key={product.id} className="col-md-3">
                    <ProductCard
                      productName={product.name}
                      price={product.price}
                      stock={product.stock}
                      imgName={product.image}
                      category={product.category}
                      id={product.id}
                      product={product}
                      productDate={product.createDate}
                      countItem={countItem} setCountItem={setCountItem}
                      userItem={userItem}
                      setUserItem={setUserItem}
                      
                    />
                  </div>
                ))}
              </div>
        </div>
      ) : (
        <div className="product-container">
          <Filter applyFilter={applyFilter}/>

          <div className="row product-row">
            
              {productList.map((product) => (
                <div key={product.id} className="col-md-3">
                  <ProductCard
                    productName={product.name}
                    price={product.price}
                    stock={product.stock}
                    imgName={product.image}
                    category={product.category}
                    id={product.id}
                    product={product}
                    productDate={product.createDate}
                    countItem={countItem} setCountItem={setCountItem}
                    userItem={userItem}
                    setUserItem={setUserItem}
                  />
                </div>
              ))}
            
          </div>
        </div>
      )}
    </>
      )}


export default ProductPage