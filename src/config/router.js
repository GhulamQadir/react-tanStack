import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'


function AppRouter() {
    return (
        <BrowserRouter><Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>

    )
}
export default AppRouter;