
interface RenderImage {
    mobile: string;
    desk: string;
    type: number
}


const RenderImage = ({mobile,desk, type}:RenderImage ) => {
     switch (type) {
     case 0:
      return (
        <>
          <img src={mobile} alt='mobile-card-image' className='md:hidden hover:opacity-75' />
          <img src={desk} alt='desk-card-image' className='hidden md:flex hover:opacity-75' />
        </>
      )
      break
     case 1: 
       return (
        <>
           <img src={mobile} alt='banner' className='lg:hidden' />
           <img src={desk} alt='banner' className='hidden lg:flex w-[87%]'/>
        </>
       ) 
  }
  
}

export default RenderImage