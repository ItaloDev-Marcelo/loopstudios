import Section from '../ui/Section';
import Card from '../ui/Card'
import RenderImage  from '../ui/RenderImage'
import { DeskInteractive, MobileInteractive } from '../../utils/Image';
import { GridData } from '../../shared/constants/GridData';
const Main = () => {
  return (
    <main className='flex flex-col items-center justify-center md:items-start xl:items-center p-5 xl:p-2 xl:gap-5'>
        <Section style='flex flex-col  items-center lg:flex-row justify-center 
        lg:pl-17  xl:my-20 relative  2xxl:left-15 xl:scale-110'>
           <figure className='tb:p-7 md:p-9 lg:p-10'>
               <RenderImage mobile={MobileInteractive} desk={DeskInteractive} type={1} /> 
           </figure>
           <div className=' text-black text-center lg:text-left bg-white p-10
            lg:w-137.5  xl:scale-115 lg:h-88.75 relative lg:top-27 lg:right-50 xl:right-45 lg:mb-30 xl:my-0 xl:gap-5'>
               <h2 className='my-3 uppercase font-light text-3xl xl:text-5xl tracking-wider'>The leader in interactive VR</h2>
               <p className='md:px-20 lg:px-0 text-gray-400'> Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
           </div>
        </Section>

        <Section style='flex flex-col my-5 justify-center items-center xl:items-stretch
        lg:pr-5  mb-10 relative xl:mt-20  xl:p-0 place-items-center'>
           <div className=' flex fle-col xl:flex-row xl:justify-between text-center items-center py-2 mb-5 xl:py-0 xl:mb-0 xl:px-30'> 
               <h2 className='text-3xl xl:text-[3.5rem] flex '>Our Creations</h2> 
               <button className='hidden  xl:flex border-2 px-7 cursor-pointer  py-1.5 hover:bg-black hover:text-white'>SEE ALL</button>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:p-3 
           xl:grid-cols-4 gap-5 xl:gap-7 xl:mt-10 tb1:pl-13 xl:p-30'>  
               {
                GridData.map((data, index) => (
                   <Card mobile={data.mobile} desk={data.desk} title={data.title} key={index} />
                ))
               }
           </div>
           <button className='xl:hidden  border-2 px-7 cursor-pointer py-1.5 mt-7 xl:mt-4 hover:bg-black hover:text-white'>SEE ALL</button>
        </Section>



    </main>
  )
}

export default Main