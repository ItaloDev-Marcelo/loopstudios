import type { NavProps } from "../../shared/types/NavProps"

const NavItem = ({navLink}:NavProps) => {
  return (
    <li className='text-2xl  my-3 tracking-wide xl:tracking-[1px] lg:my-0 lg:text-[1.1em] lg:mx-3.5
   font-light uppercase lg:capitalize lg:font-semibold  text-white'><a href='#'>{navLink}
     <span className='line hidden xl:block'></span>
   </a></li>
  )
  
}

export default NavItem