import NavItem from "../components/NavItem"
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import { useState } from "react";

export default function NavBar() {
    const navItems = ['ABOUT', 'CARRERS', 'EVENTS', 'PRODUCTS', 'SUPPORT']
    const [navTab, setNavTab] = useState(false)
    return  (
        <nav className={`bg-black h-screen text-white p-4 `}>
             <div className='flex flex-row justify-between items-center mt-2.5'><a href='index.html' className='font-bold text-2xl'>loopstudios</a>
             <button onClick={() => setNavTab(!navTab)}>{navTab ? <img src={hamburger}/>  : <img src={close} />}</button>
             </div>
             <ul className=" mt-27">
                {navItems.map((item, index) => (
                    <NavItem navLink={item} key={index} />
                ))}
             </ul>
        </nav>
    )
}