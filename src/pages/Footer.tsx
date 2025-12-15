import RenderFooter from '../components/RenderFooter'
const FooterComp = () => {
  return (
    <footer className='bg-black text-white h-full lg:h-45 lg:mt-10 xl:mt-7 xl:px-15'>
        <RenderFooter type={0} />
        <RenderFooter type={1} />
    </footer>
  )
}

export default FooterComp