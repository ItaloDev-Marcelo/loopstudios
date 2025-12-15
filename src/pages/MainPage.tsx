import Section from '../components/Section';
import { Images, Data } from '../utils/images.block';
import Card from '../components/Card'
import RenderImage  from '../components/RenderImage'
const MainPage = () => {
  return (
    <main className='flex flex-col items-center justify-center md:items-start p-2'>
        <Section style='flex flex-col items-center lg:flex-row justify-center mt-10 lg:mt-[-10em]  xl:mt-25 lg:pl-17 '>
           <figure className='tb:p-7 md:p-9 lg:p-10'>
               <RenderImage mobile={Images[16]} desk={Images[17]} type={1} /> 
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

        <Section style='flex flex-col  justify-center items-center xl:items-stretch
         mt-10 lg:mt-[-10em]  xl:mt-25 lg:pl-17 xl:pl-25 mb-10'>
           <div className=' flex fle-col xl:flex-row xl:justify-between text-center items-center py-2 mb-5'> 
               <h2 className='text-3xl xl:text-4xl flex '>Our Creations</h2> 
               <button className='hidden xl:flex border-2 px-4 py-1.5 hover:bg-black hover:text-white'>SEE ALL</button>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-3 md:p-3 xl:p-0
           xl:grid-cols-4 gap-5 xl:mt-10'>  
               {
                Data.map((data) => (
                   <Card mobile={data.mobile} desk={data.desk} title={data.title} key={data.id} />
                ))
               }
           </div>
           <button className='xl:hidden  border-2 px-4 py-1.5 mt-4 hover:bg-black hover:text-white'>SEE ALL</button>
        </Section>



    </main>
  )
}

export default MainPage