import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login/Login';
import Details from './User/Details';
import Forms from './User/Forms';
import User from '../pages/User'

export default function Index() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>

                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/details' element={<Details/>} />
                        <Route path='/forms' element={<Forms/>} />
                        <Route path='/user' element={<User/> }/>

                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}
