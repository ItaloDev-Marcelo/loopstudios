import NavItem from "../components/NavItem"

export default function NavBar() {
    const navItems = ['ABOUT', 'CARRERS', 'EVENTS', 'PRODUCTS', 'SUPPORT']
    return  (
        <nav className='bg-black h-screen text-white'>
            <a href='index.html'>loopstudios</a>
             <ul>
                {navItems.map((item, index) => (
                    <NavItem navLink={item} key={index} />
                ))}
             </ul>
        </nav>
    )
}