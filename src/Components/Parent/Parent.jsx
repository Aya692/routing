import { Component } from "react";
import Child from "../Child/Child";



export default class Parent extends Component  { 

    
  //  lifting state up 
  
  // props 
    state = {
       products: [
        {id: 20 , count : 30 , code: 'samsumg c3' , category: 'mobile' , onSale: true },
        {id: 5 , count : 30 , code: 'toshiba c3' , category: 'mobile', onSale: true  },
        {id: 8 , count : 30 , code: 'samsumg c3' , category: 'mobile',onSale: false },
        {id: 21 , count : 30 , code: 'lenovo c3' , category: 'mobile', onSale: true },
        {id: 3, count : 30 , code: 'samsumg c3' , category: 'mobile' ,onSale: false},
        {id: 2 , count : 30 , code: 'samsumg c3' , category: 'mobile', onSale: true },
        {id: 10 , count : 30 , code: 'tablet c3' , category: 'mobile',onSale: false},
        {id: 12 , count : 30 , code: 'samsumg c3' , category: 'mobile', onSale: true },
        {id: 13 , count : 30 , code: 'samsumg c3' , category: 'mobile',onSale: true},
        {id: 40, count : 30 , code: 'toshiba c3' , category: 'mobile',onSale: false},
        {id: 60 , count : 30 , code: 'samsumg c3' , category: 'mobile',onSale: false},
        {id: 80 , count : 30 , code: 'samsumg c3' , category: 'mobile',onSale: true},
       ]
    } 
  

    constructor(){
        super();
        console.log('constructor call');
        
    } 

    x;
   
    deleteProduct = (productId)=> {

        // deep copy  
        let myProducts= [...this.state.products] ;
        // update copy 
        myProducts=  myProducts.filter((product)=>  product.id !== productId)
        // setState()
        this.setState({products: myProducts})

    }  
     

    updateProduct =(index , step)=> {
      // deep copy 
      let myProducts = [...this.state.products] 
      //update copy
      myProducts[index].count+= step; 
      // setState
      this.setState({products: myProducts})
      
    } 

    render() {  
      console.log('render call');
      
      return <>
         <p id="demo">10</p>
        <div className="container">
     
         <div className="bg-dark p-4"> 

         <div className="row gy-4">
              {this.state.products.map((product  , index)=> <Child index={index} key={product.id} update={this.updateProduct} delete={this.deleteProduct} productDetails={product}/>)}
         </div>
            </div>
        </div>
        
      </>


    } 

    componentDidMount(){ 
     this.x=  setInterval(()=> console.log('Hello') , 500);
       console.log('componentDidMount'); 

       
    } 

    componentDidUpdate() {
      
      console.log('componentDidUpdate');
       
    } 

    componentWillUnmount() {
      clearInterval(this.x)
    }

} 


// // virtual dom == real dom 
// // virtual dom

// diffing algrothim


// let x = [10,20,30,40] ;
// x.filter((price)=>  price> 15)
// [20,30,40]


// let arr1 = [1,3,4]
// let arr2 = arr1 

// [1,3,4]// shallow copy

// let arr2 = [...arr1]

// [1,3,4]