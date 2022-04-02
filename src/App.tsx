import React from 'react'
import {Header} from './components'
import {Route, Routes} from 'react-router-dom'
import {Cart, Home} from './pages'

function App(): JSX.Element {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App