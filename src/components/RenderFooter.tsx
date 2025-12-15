
import { navItems } from '../utils/Nav.items'
import NavItem from './NavItem'
import { RodapeImages } from '../utils/images.block.rodape'

export const Footer0 = () => {
    return (
         <div className='lg:hidden flex flex-col items-center justify-center p-5'>
           <h4><a href='index.html' className='font-bold text-2xl text-white'>loopstudios</a></h4>
           <ul  className='flex flex-col justify-center items-center'>
               {navItems.map((item, index) => (
                    <li key={index} className='py-4 cursor-pointer font-bold'>{item}</li>
               ))}
           </ul>

           <ul  className='flex flex-row my-5'>
               {
                RodapeImages.map((item, index) => (
                     <li key={index} className='px-2'>
                        <img src={item} alt='social-icon' />
                     </li>
                ))
               }
           </ul>

           <p className='my-4'>© 2021 Loopstudios. All rights reserved.</p>
         </div>
    )
}


export const Footer1 = () => {
    return (
         <div className='hidden lg:flex lg:flex-col p-7'>
          <div className='flex flex-row justify-between items-center px-5'>
             <h4><a href='index.html' className='font-bold text-2xl text-white pl-1.5'>loopstudios</a></h4>
           <ul  className='flex flex-row px-0 my-8'>
               {
                RodapeImages.map((item, index) => (
                     <li key={index} className='px-2'>
                        <img src={item} alt='social-icon' />
                     </li>
                ))
               }
           </ul>
          </div>

          <div className='flex flex-row justify-between items-center'>
              <ul className='flex flex-row px-2'>
               {navItems.map((item, index) => (
                    <NavItem navLink={item} key={index} />
               ))}
           </ul>


           <p className='pr-7'>© 2021 Loopstudios. All rights reserved.</p>
          </div>
         </div>
    )
}

interface RenderFooter {type: number}

const RenderFooter = ({type}:RenderFooter ) => {
  return (
    <>
      {
        type === 0 ? <Footer0 />: <Footer1/>
      }
    </>
  )
}

export default RenderFooter