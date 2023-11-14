import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import DeleteBook from "./pages/DeleteBook"
import ShowBook from "./pages/ShowBook"
import EditBook from "./pages/EditBook"
import CreateBook from "./pages/CreateBook"


const App = () => {
  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books/delete/:id" element={<DeleteBook/>}/>
    <Route path="/books/edit/:id" element={<EditBook/>}/>
    <Route path="/books/create" element={<CreateBook/>}/>
    <Route path="/books/details/:id" element={<ShowBook/>}/>
  </Routes>
</Router>
</>  
)
}

export default App