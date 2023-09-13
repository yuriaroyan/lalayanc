import {BrowserRouter} from "react-router-dom"
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import {Services} from "../Container/services/Services"
import {Home} from "../Container/home/Home"
import {Galery} from "../Container/galery/Galery"
import {Aboutus} from "../Container/aboutus/Aboutus"
import {Contacts} from "../Container/contacts/Contacts"
import '../app.css'
import {useTranslation} from "react-i18next";
import {useState} from "react";
import LanguageDropdown from "../components/LanguageDropdown";

const Router = () => {
    const [openMenu, setOpenMenu] = useState(window.innerWidth > 991 ? true : false)
    const {t} = useTranslation()

    return (

        <>
            <BrowserRouter>
                <div className="fdr header">
                    <div className="logo">
                        <img className='img2' src="img/logo.jpg" alt=""/>
                        <LanguageDropdown/>
                    </div>
                    <div className="mobileMenu">
                        <h2>Սեղմիր</h2>
                        <i style={{fontSize: "24px"}} className="fa fa-arrow-down" aria-hidden="true"></i>
                        <i onClick={() => setOpenMenu(!openMenu)} style={{fontSize: "40px", color: '#d4af37'}}
                           className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    {openMenu && <nav>
                        <ul>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/'>{t(`home`)}</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/aboutus'>Մեր մասին</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/services'>Ծառայություններ</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/pictures'>Նկարներ</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/contacts'>Հետադարձ կապ</Link></li>
                            <img src="img/ring.png" alt=""/>

                        </ul>

                    </nav>}

                </div>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/aboutus" element={<Aboutus/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/pictures" element={<Galery/>}></Route>
                    <Route path="/contacts" element={<Contacts/>}></Route>


                </Routes>


            </BrowserRouter>

        </>

    )
}
export default Router