import TestimonialImage from './TestimonialImage'
import TestimonialText from './TestimonialText'

const Testimonials = () => {
  return (
    <section id='testimonials' className='mt-32 flex justify-center gap-3'>
      <TestimonialText />
      <TestimonialImage />
    </section>
  )
}
export default Testimonials
