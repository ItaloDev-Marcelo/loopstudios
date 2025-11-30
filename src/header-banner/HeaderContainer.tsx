import React from 'react'

interface HeaderProps  {
    children : React.ReactNode
}

const HeaderContainer = ({children}:HeaderProps) => {
  return (
    <header>{children}</header>
  )
}

export default HeaderContainer