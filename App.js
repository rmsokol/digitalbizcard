import React from 'react'
import ReactDOM from 'react-dom'
import About from './components/About.js'
import Info from './components/Info.js'
import Interests from './components/Interest.js'
import Footer from './components/Footer.js'

export default function App() {
    return (
        <div className="photo-card">
            <img src="avatar.png" alt="ash-ketchum"/>
                <div className="container">
                    <Info />
                    <About />
                    <Interests />
                    <Footer />
                </div>
        </div>
    )
}