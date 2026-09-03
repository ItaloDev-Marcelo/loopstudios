import type { SectionProps } from "../../shared/types/SectionProps"

const Section = ({children,style}:SectionProps) => {
  return (
    <section className={style}>{children}</section>
  )
}

export default Section