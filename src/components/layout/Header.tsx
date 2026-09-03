import HeaderContainer from '../ui/HeaderContainer';
import type { CommunProps } from '../../shared/types/CommunProps';
import NavBar from './NavBar'

const Header = ({hundleNav,navTab}:CommunProps) => {
  return (
    <HeaderContainer>
        <NavBar hundleNav={hundleNav} navTab={navTab} />
        <div className='border-2 border-white  p-4 w-81.25 
        h-50 xl:h-55  md:w-100 lg:w-125 m-auto xl:p-4 relative top-50 tb:top-10 md:top-5 
        lg:top-10  lg:mx-10 lg:my-0 xl:top-35 lg:left-4 xl:left-20 xl:scale-125'>
            <h1 className='text-4xl lg:text-[3.3em] xl:tracking-wider font-light text-white '>IMMERSIVE <br className='lg:hidden'/>
             EXPERIENCES <br className='lg:hidden'/>  THAT <br className='lg:hidden'/>  DELIVER</h1>
        </div>
    </HeaderContainer>
  )
}

export default Header