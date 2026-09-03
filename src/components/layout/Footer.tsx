import RenderFooter from '../ui/RenderFooter'

const Footer = () => {
  return (
    <footer className='bg-black text-white h-full lg:h-45 lg:mt-10 xl:mt-25 lg:px-5 xl:px-20'>
        <RenderFooter type={0} />
        <RenderFooter type={1} />
    </footer>
  )
}

export default Footer