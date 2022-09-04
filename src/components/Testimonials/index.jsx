import TestimonialImage from './TestimonialImage'
import TestimonialText from './TestimonialText'

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='mt-32 flex flex-col justify-center gap-10 lg:flex-row lg:gap-3'
    >
      <TestimonialText />
      <TestimonialImage />
    </section>
  )
}
export default Testimonials
