import NavItem from "../components/NavItem"
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import { useState } from "react";

export default function NavBar() {
    const navItems = ['About', 'Carrers', 'Events', 'Products', 'Support']
    const [navTab, setNavTab] = useState(false)
    return  (
        <nav className={`${navTab ? 'bg-transparent text-black   lg:px-14 lg:pt-20' :
         'bg-black h-screen lg:h-auto text-white lg:bg-transparent  '} lg:flex lg:items-center lg:justify-between p-4 lg:p-9 xl:p-11 `}>
             <div className='flex flex-row justify-between items-center mt-2.5 px-2 lg:mt-0'>
                <a href='index.html' className='font-bold text-2xl text-white'>loopstudios</a>
             <button id='btn' className='flex lg:hidden' onClick={() => setNavTab(!navTab)}>{navTab ? <img src={hamburger} className="is-closed"/>  : <img src={close} className='is-open' />}</button>
             </div>
             <ul className={`${navTab ? 'hidden lg:flex lg:flex-row lg:items-center px-2 ' : ' mt-27 lg:mt-0 lg:flex lg:flex-row lg:items-center'} xl:px-5`}>
                {navItems.map((item, index) => (
                    <NavItem navLink={item} key={index} />
                ))}
             </ul>
        </nav>
    )
}