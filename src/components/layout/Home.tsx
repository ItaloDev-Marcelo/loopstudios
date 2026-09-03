import {useState} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Home = () => {
  const [navTab, setNavTab] = useState(true);
  const hundleNav = () => setNavTab(!navTab)
  const showblock = navTab ? 'block relative ' : 'hidden'
  return (
    <>
      <Header hundleNav={hundleNav} navTab={navTab} />
      <div className={`${showblock} lg:block`}>
      <Main />
      <Footer />
      </div>
    </>
  )
}

export default Home