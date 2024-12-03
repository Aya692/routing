import { Component } from "react"

import style from './About.module.css'
export default class About extends Component  {
 



 state = {
    count : 0

 } 
  changeCount =()=> {
   this.setState({count: Math.random()})
 }

 render() {
    return <>  
    <p className={style.test}>About page</p>
    <p>{this.state.count}</p>
    <button 
    onClick={this.changeCount}
     className="btn btn-danger">change counter Now </button>
     
    </>
 }

}

 
