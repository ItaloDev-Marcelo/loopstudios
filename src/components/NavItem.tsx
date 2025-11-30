
interface NavProps {navLink: string}

const NavItem = ({navLink}:NavProps) => {
  return <li className='text-2xl my-7 font-light  text-gray-200 hover:text-white'><a href='#'>{navLink}</a></li>
}

export default NavItem