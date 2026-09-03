import NavItem from "../ui/NavItem"
import { navItems } from "../../shared/constants/Nav.items";
import type { CommunProps } from "../../shared/types/CommunProps";
import { Close, Hamburger, Logo } from "../../utils/Image";

export default function NavBar({hundleNav,navTab}:CommunProps) {
     
    return  (
        <nav className={`${navTab ? 'bg-transparent  text-black   lg:px-14 lg:pt-20' :
         'bg-black h-screen lg:h-auto text-white lg:bg-transparent  '}
          lg:flex lg:items-center lg:justify-between lg:mt-2.5 p-7 lg:p-5 xl:p-11 `}>
             <div className='flex flex-row justify-between items-center mt-2.5 px-2 lg:mt-0 lg:ml-2.5'>
                <a href='index.html' className='w-45 xl:w-75 '><img src={Logo} alt='logo' /> </a>
             <button id='btn' className='flex lg:hidden' onClick={hundleNav}>{navTab ? <img src={Hamburger} className="is-closed"/> 
              : <img src={Close} className='is-open' />}</button>
             </div>
             <ul className={`${navTab ? 'hidden lg:flex lg:flex-row lg:items-center px-4 ' :
                 ' mt-35 lg:mt-0 lg:flex lg:flex-row lg:items-center'} xl:px-5`}>
                {navItems.map((item, index) => (
                    <NavItem navLink={item} key={index} />
                ))}
             </ul>
        </nav>
    )
}