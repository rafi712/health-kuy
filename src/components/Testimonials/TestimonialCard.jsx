import Star from '../../assets/icons/star.svg'

const TestimonialCard = ({ image, name }) => {
  return (
    <div className='rounded-xl bg-white p-5'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <img src={image} alt='testimonial person' height={42} width={42} />
          <p className='text-base font-semibold lg:text-lg'>{name}</p>
        </div>

        <div className='flex gap-0.5'>
          <img src={Star} alt='star' width={24} height={24} />
          <img src={Star} alt='star' width={24} height={24} />
          <img src={Star} alt='star' width={24} height={24} />
          <img src={Star} alt='star' width={24} height={24} />
          <img src={Star} alt='star' width={24} height={24} />
        </div>
      </div>

      <p className='mt-5 max-w-lg text-base text-[#8A8A8A] lg:text-lg'>
        “Lorem Ipsum is simply dummy text the printing industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s”
      </p>
    </div>
  )
}
export default TestimonialCard
