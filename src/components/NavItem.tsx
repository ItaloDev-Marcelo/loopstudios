import type { NavProps } from "../interface/NavProps"

const NavItem = ({navLink}:NavProps) => {
  return <li className='text-2xl  my-7 lg:my-0 lg:text-[1.1em] lg:mx-3.5
   font-light uppercase lg:capitalize lg:font-semibold  text-gray-200 hover:text-white'><a href='#'>{navLink}</a></li>
}

export default NavItem