import React, {useState} from "react";
import '../src/scss/style.scss'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import {Route, Routes} from 'react-router-dom'
import Custom from "./pages/Custom/Custom";
import Pizza from "./pages/Pizza/Pizza";
import Sushi from "./pages/Sushi/Sushi";
import Drinks from "./pages/Drinks/Drinks";
import Snacks from "./pages/Snacks/Snacks";
import Desserts from "./pages/Desserts/Desserts";
import Souse from "./pages/Souse/Souse";
import Sales from "./pages/Sales/Sales";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='menu' element={<Menu/>}/>
                <Route path='sales' element={<Sales/>}/>
                <Route path='pizza' element={<Pizza/>}/>
                <Route path='sushi' element={<Sushi/>}/>
                <Route path='drinks' element={<Drinks/>}/>
                <Route path='snacks' element={<Snacks/>}/>
                <Route path='desserts' element={<Desserts/>}/>
                <Route path='souse' element={<Souse/>}/>

                <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='/custom' element={<Custom/>}/>

        </Routes>
    </>
  );
}

export default App;
