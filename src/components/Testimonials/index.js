import TestimonialImage from './TestimonialImage'
import TestimonialText from './TestimonialText'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex justify-center gap-3 mt-32'>
      <TestimonialText />
      <TestimonialImage />
    </section>
  )
}
export default Testimonials
