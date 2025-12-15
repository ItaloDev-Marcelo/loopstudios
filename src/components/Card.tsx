import RenderImage from '../components/RenderImage';

interface CardProps {
    mobile: string;
    desk: string;
    title: string
}

const Card = ({mobile, desk, title}:CardProps) => {
  return (
    <div className=' text-white hover:text-black cursor-pointer '>
        <figure className="relative">
            <RenderImage mobile={mobile} desk={desk}  type={0}/>
            <h3 className="absolute left-6 top-20 md:top-90 xl:top-97 font-medium">{title}</h3>
        </figure>
    </div>
  )
}

export default Card