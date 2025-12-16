import HeaderContainer from '../header-banner/HeaderContainer';
import type { CommunProps } from '../interface/CommunProps';
import NavBar from '../Nav/NavBar'

const headerPage = ({hundleNav,navTab}:CommunProps) => {
  return (
    <HeaderContainer>
        <NavBar hundleNav={hundleNav} navTab={navTab} />
        <div className='border-2 border-white p-4 w-[325px] 
        h-50 md:w-[400px] lg:w-[450px] m-auto  relative top-50 tb:top-10 md:top-20 
        lg:top-15 lg:mx-10 lg:my-0 xl:top-25 lg:left-4'>
            <h1 className='text-4xl lg:text-[3.3em] font-light text-gray-200 '>IMMERSIVE <br className='lg:hidden'/>
             EXPERIENCES <br className='lg:hidden'/>  THAT <br className='lg:hidden'/>  DELIVER</h1>
        </div>
    </HeaderContainer>
  )
}

export default headerPage