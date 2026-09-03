import type { HeaderProps } from "../../shared/types/HeaderProps"

const HeaderContainer = ({children}:HeaderProps) => {
  return (
    <header className='overflow-hidden  lg:px-4 xl:px-20 xl:py-7 '>{children}</header>
  )
}

export default HeaderContainer