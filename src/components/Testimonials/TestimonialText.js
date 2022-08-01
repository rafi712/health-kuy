import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../utils/data'

const TestimonialText = () => {
  return (
    <div className='mt-5'>
      <p className='font-medium text-[18px] text-[#0C64DC] capitalize'>
        What They say about us
      </p>
      <h2 className='font-semibold text-[32px] capitalize mt-1'>
        happy patients tell us something
      </h2>
      <div className='mt-8 flex flex-col gap-5'>
        {testimonials.map((testimonial) => (
          <TestimonialCard name={testimonial.name} image={testimonial.image} />
        ))}
      </div>
      <button className='mt-8 border py-3 px-8 rounded-xl border-[#0C64DC] text-[#0C64DC] font-medium'>
        See More Stories
      </button>
    </div>
  )
}
export default TestimonialText
