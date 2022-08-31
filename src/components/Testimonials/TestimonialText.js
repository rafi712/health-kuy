import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../utils/data'

const TestimonialText = () => {
  return (
    <div className='mt-5'>
      <p className='text-[18px] font-medium capitalize text-[#0C64DC]'>
        What They say about us
      </p>
      <h2 className='mt-1 text-[32px] font-semibold capitalize'>
        happy patients tell us something
      </h2>
      <div className='mt-8 flex flex-col gap-5'>
        {testimonials.map((testimonial) => (
          <TestimonialCard name={testimonial.name} image={testimonial.image} />
        ))}
      </div>
      <button className='mt-8 rounded-xl border border-[#0C64DC] py-3 px-8 font-medium text-[#0C64DC]'>
        See More Stories
      </button>
    </div>
  )
}
export default TestimonialText
