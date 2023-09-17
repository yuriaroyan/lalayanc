import {BrowserRouter} from "react-router-dom"
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import {Services} from "../container/services/Services"
import {Home} from "../container/home/Home"
import {Galery} from "../container/galery/Galery"
import {Aboutus} from "../container/aboutus/Aboutus"
import {Contacts} from "../container/contacts/Contacts"
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
                <div className="translate_select">
                    <LanguageDropdown/>
                </div>

                <div className="fdr header">
                    <div className="logo">
                        <img className='img2' src="img/logo.jpg" alt=""/>

                    </div>
                    <div className="mobileMenu">
                        <h2>{t(`mobilePush`)}</h2>
                        <i style={{fontSize: "24px"}} className="fa fa-arrow-down" aria-hidden="true"></i>
                        <i onClick={() => setOpenMenu(!openMenu)} style={{fontSize: "40px", color: '#d4af37'}}
                           className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    {openMenu && <nav>
                        <ul>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/'>{t(`home`)}</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/aboutus'>{t(`about_us`)}</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/services'>{t(`services`)}</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/pictures'>{t(`gallery`)}</Link></li>
                            <img src="img/ring.png" alt=""/>
                            <li><Link to='/contacts'>{t(`contacts`)}</Link></li>
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