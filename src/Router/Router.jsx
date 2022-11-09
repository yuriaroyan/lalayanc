import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { Services } from "../Container/services/Services"
import { Home } from "../Container/home/Home"
import { Galery } from "../Container/galery/Galery"
import { Aboutus } from "../Container/aboutus/Aboutus"
import { Contacts } from "../Container/contacts/Contacts"
import '../app.css'
const Router = () => {

    return (

        <>


            <BrowserRouter>
                <div className="fdr header">
                    <div className="logo">
                        <img className='img2' src="img/logo.jpg" alt="" />
                    </div>
                    <nav>

                        <ul>
                            <img src="img/ring.png" alt="" />
                            <li><Link to='/'>Գլախավոր</Link></li>
                            <img src="img/ring.png" alt="" />
                            <li><Link to='/aboutus'>Մեր մասին</Link></li>
                            <img src="img/ring.png" alt="" />
                            <li><Link to='/services'>Ծառայություններ</Link></li>
                            <img src="img/ring.png" alt="" />
                            <li><Link to='/pictures'>Նկարներ</Link></li>
                            <img src="img/ring.png" alt="" />
                            <li><Link to='/contacts'>Հետադարձ կապ</Link></li>
                            <img src="img/ring.png" alt="" />

                        </ul>

                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/aboutus" element={<Aboutus />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/pictures" element={<Galery />}></Route>
                    <Route path="/contacts" element={<Contacts />}></Route>


                </Routes>


            </BrowserRouter>

        </>

    )
}
export default Router