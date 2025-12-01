import Section from '../components/Section';
import { Images } from '../utils/images.block';

const MainPage = () => {
  return (
    <main className='flex flex-col items-center justify-center md:items-start p-2'>
        <Section style='flex flex-col items-center lg:flex-row justify-center mt-10 lg:mt-[-10em]  xl:mt-25 lg:pl-17 '>
           <figure className='tb:p-7 md:p-9 lg:p-10'>
               <img src={Images[8]} alt='banner' className='lg:hidden' />
               <img src={Images[9]} alt='banner' className='hidden lg:flex w-[87%]' />
           </figure>
           <div className=' text-black text-center lg:text-left bg-white p-10
            lg:w-[550px] lg:h-[355px] relative lg:top-27 lg:right-50'>
               <h2 className='my-3 uppercase text-3xl '>The leader in interactive VR</h2>
               <p className='md:px-20 lg:px-0'> Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
           </div>
        </Section>
    </main>
  )
}

export default MainPage