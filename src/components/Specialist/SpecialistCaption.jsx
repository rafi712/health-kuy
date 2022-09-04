import { specialistAmount } from '../../utils/data'

const SpecialistCaption = () => {
  return (
    <div className='flex-1 lg:ml-16'>
      <p className='blue-section-title'>Doctor Specialist</p>
      <h2 className='black-section-title mt-1 capitalize'>
        Our experienced & trusted specialist doctors are ready to help patients
      </h2>
      <p className='mt-3 text-[#8A8A8A]'>
        Lorem Ipsum is simply dummy text of the printing typesetting industry.
      </p>
      <div className='mt-8 grid grid-cols-2 grid-rows-2 gap-y-6'>
        {specialistAmount.map((item) => (
          <div>
            <h5 className='text-xl font-semibold lg:text-2xl'>{item.amount}</h5>
            <p className='text-[15px] text-[#8A8A8A] lg:text-base'>
              {item.type}
            </p>
          </div>
        ))}
      </div>
      <div className='mt-8 flex flex-col gap-4 lg:flex-row lg:gap-0'>
        <button className='h-[48px] rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 px-8 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500'>
          Choose Specialist
        </button>
        <button className='py-3 px-8 font-medium text-[#0C64DC]'>
          View All Specialist
        </button>
      </div>
    </div>
  )
}
export default SpecialistCaption
