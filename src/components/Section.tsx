import type { SectionProps } from "../interface/SectionProps"

const Section = ({children,style}:SectionProps) => {
  return (
    <section className={style}>{children}</section>
  )
}

export default Section