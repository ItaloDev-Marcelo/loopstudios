
interface NavProps {navLink: string}

const NavItem = ({navLink}:NavProps) => {
  return <li><a href='#'>{navLink}</a></li>
}

export default NavItem