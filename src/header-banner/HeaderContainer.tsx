import type { HeaderProps } from "../interface/HeaderProps"

const HeaderContainer = ({children}:HeaderProps) => {
  return (
    <header className='overflow-hidden lg:px-4 xl:p-7'>{children}</header>
  )
}

export default HeaderContainer