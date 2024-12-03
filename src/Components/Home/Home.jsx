import { Component } from "react";
import style from './Home.module.css'
import image1 from '../../assets/images/images.jpeg'
export default class Home  extends Component {
  
   state = {    
      productName: 'samsung n8' ,
      productPrice: 8000 ,
      userName: 'Ali Mahmoud' ,
      darkStyle: 'bg-dark text-white text-center'   
   }   
 
   welcome() {
      return `welcome ${this.state.userName}`
   }
  

   render(){
    return  <>    
      <p className="text-center bg-dark text-white fs-4 p-3">Hello lets show our images together ya zmelly</p>
    <img src={image1} alt="cat image" />  
    <img className="m-3" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s' alt="" />
        <p style={{textAlign: 'center' , color: 'blue' , fontSize: '2rem'}}>welcome</p>
      <p className={`${style.test} ${style.dark} text-center p-2   `}>Home page</p>    
      
      <h1>{this.welcome()}</h1>
      <h1 className={this.state.darkStyle}>product Name : {this.state.productName}</h1> 
      <h1 className="text-danger">product Price: {this.state.productPrice}</h1> 
      <h1 className={this.state.darkStyle}>my name is {this.state.userName}</h1>
      <h2 className="text-center"> <i className="fas fa-home"></i>  Home page</h2>
         <div className={style.paragraph}>
                  <p>Declarative views make your code more predictable and easier to debug.</p> 
            
         </div>      

      

    
    </>
   }
}


// nested routing 
// axios ==> data from api 
// react with images , css