import { Component } from "react";




export default class Child extends Component {
    state = {

    } 
   
    render() {   
    let  {id , count, code , category , onSale } = this.props.productDetails;
        // console.log(this.props); 
        // productDetails//{id: 20 , count : 30 , code: 'samsumg c3' , category: 'mobile'}
    
      
        return<>  
        <div className="col-md-3 ">
            
        <div className="bg-white position-relative p-1">
            <h5>id : {id}</h5>
            <h5>count : {count}</h5>
            <h5>code : {code}</h5>
            <h5>category : {category}</h5>
          
            {onSale==true ?<div className="bg-danger p-1 text-white position-absolute top-0 end-0">Sale</div>:''}
            <button onClick={()=> this.props.delete(id)} className=" btn bg-danger text-white w-100">delete</button>
            <button onClick={()=> this.props.update(this.props.index , 1 )} className="btn btn-info w-100 my-2">increase</button>
            <button onClick={()=> this.props.update(this.props.index ,-1 )} className="btn btn-info w-100 my-2">decrease</button>
           </div>
            </div> 
      
      
        
        </>
    }
}

// class Component life cycle



