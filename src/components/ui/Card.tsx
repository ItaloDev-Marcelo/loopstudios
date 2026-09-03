import RenderImage from './RenderImage';
import type { CardProps } from '../../shared/types/CardProps';
const Card = ({mobile, desk, title}:CardProps) => {
  return (
    <div className=' text-white  cursor-pointer '>
        <figure className="relative">
            <RenderImage mobile={mobile} desk={desk}  type={0}/>
            <h3 className="absolute left-6 text-[17px] top-20 xl:leading-10 xl:text-[30px] xl:w-35  md:top-90 xl:top-85 font-light">{title}</h3>
        </figure>
    </div>
  )
}

export default Card