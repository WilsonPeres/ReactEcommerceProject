import React from 'react';
import './App.css';
import Product  from './components/productPagecontent';
import productData from './data/products.json';
import Toolbar from '../src/components/Navigation/Toolbar/Toolbar';
import Footertoolbar from '../src/components/Footer/FooterToolbar/FooterToolbar';
import Hero from '../src/components/Hero/Hero'


// we set equal our products
const initialState = {
  products: productData
}
// this.state is our brain 
class Products extends React.Component {
  constructor() {
      super()
      this.state = initialState

}

filterProducts =(evt) => {
  let value = evt.target.value

  // makes a new array for product availability 
  const allProducts =  [...initialState.products] 
    if (value === "All"){
      this.setState({products: allProducts})
      return 
    }
    //filters by category
  const filterProducts = allProducts.filter(product => {
    return product.category === value
  })
  // only products that we filter
  this.setState({products: filterProducts})
};


filterPrice =(evt) => {
  let value = evt.target.value

  // makes a new array for product availability 
  const allProducts =  [...initialState.products] 
    if (value === "All"){
      this.setState({products: allProducts})
      return 
    }
    //filters by price
  const filterPrice = allProducts.filter(product => {
    return product.price === value
  })
  // only products that we filter
  this.setState({products: filterPrice})
};


render(){
const mappedProducts = this.state.products.map(product => {
   
    return <Product name={product.productname} price={product.price} description={product.description} image={product.image} />
})

return (

  <div className="ProductsContainer ">
 <Hero/>   
 <Toolbar/>
    <h1 >Menu</h1>
      <select onChange={evt => this.filterProducts(evt)} >
              <option value="All">All Types</option>
              <option value="FrutaLoca">Frutas Locas</option>
               <option value="Raspadas">Raspadas</option>
               <option value="AguasFrescas">Aguas Frescas</option>
               <option value="Mexican Snacks">Mexican Snacks</option>
      </select> 

      <select onChange={evt => this.filterPrice(evt)} >
              <option value="All">All Prices</option>
              <option value="5.00">$5.00</option>
              <option value="7.00">$7.00</option>
              <option value="10.00">$10.00</option>
              <option value="12.00">$12.00</option>
      </select> 

   <div className= "container">
   {mappedProducts}
  </div>   
   <Footertoolbar/>
  </div>
);
}
}


export default Products;