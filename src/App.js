import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import {Contacts} from "./Components/Contacts/Contacts"

import { createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import { PageNotFound } from "./Components/PageNotFound/PageNotFound"


export default function App(){
   

   let routers = createHashRouter([ 
    {path: '' ,element: <Layout/> , children: [
      {index: true , element: <Home/>},
      {path: 'about' , element: <About/>},
      {path:'contacts', element: <Contacts/>} , 
      {path:'*' ,element: <PageNotFound/>}
    ]},
    
   ])
 
       
    return <>  
     
    <RouterProvider router={routers}></RouterProvider>
        
  </>
     
  }
  
