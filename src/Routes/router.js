import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import React from 'react'
import Nav from '../Components/Nav'
import About from '../Components/About'
import BlogRoute from '../Components/Blog-route'




const Router = () => {




    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav />} >

                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    {/* <Route path='/blog' element={<BlogRoute />} /> */}



                </Route>



            </Routes>
        </BrowserRouter>
    )

}

export default Router