import { useEffect, useState } from "react"

 


export default function Products() { 

   let [count , setCount] = useState(0);
   let [ userName , setUserName] = useState('Kareem');
   let[data , setData] = useState([])

  function ChangeName() {
    setUserName('Ali ismail')
  }
  function changeCount(){
    setCount(Math.random())
  } 
    

// component didmount 
  useEffect(()=> {
      //call api 
      console.log(' component didmount ');
      
  } , []) 

 // component didupdate
 useEffect(()=> {
       if(count == 0 && userName== 'Kareem') 
        return;
      console.log(' component didupdate ');
      
  } , [count , userName]) 
  
   // component willUnmount
 useEffect(()=> {
      // will unmount
       return ()=> {
         console.log(' component will unmount');
         
       }
 } , [])


 // mount , update , unmount 
 useEffect(()=> {
    console.log('hello'); 
 })


 // infinite loop
//  useEffect(()=> {
//     setCount(Math.random())
//  })




   
     return <>  
     <h1 className="bg-info">{count}</h1>  
   <p>  {userName}</p>
     <button className="btn btn-info" onClick={ChangeName}>Click</button> 
     <button className="btn btn-success" onClick={changeCount}>change count</button>
     <h1 className="bg-danger text-white p-4">Products</h1>
        </>
  
}