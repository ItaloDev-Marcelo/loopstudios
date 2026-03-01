import {useState} from 'react'
import HeaderPage from '../pages/headerPage'
import MainPage from '../pages/MainPage'
import FooterComp from '../pages/Footer'

const FullPage = () => {
  const [navTab, setNavTab] = useState(true);
  const hundleNav = () => setNavTab(!navTab)

  return (
    <>
  <HeaderPage hundleNav={hundleNav} navTab={navTab}/>
      <div className={` ${navTab ? 'block relative ' : 'hidden   lg:block'}`}>
      <MainPage/>
      <FooterComp />
      </div>
    </>
  )
}

export default FullPage