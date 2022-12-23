import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import React from 'react'
import Nav from '../Components/Nav'


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav />} >

                    <Route index element={<Home />} />


                </Route>



            </Routes>
        </BrowserRouter>
    )

}

export default Router