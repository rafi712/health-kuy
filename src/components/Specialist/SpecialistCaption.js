import { specialistAmount } from '../../utils/data'

const SpecialistCaption = () => {
  return (
    <div className='ml-16 flex-1'>
      <p className='font-medium text-[18px] text-[#0C64DC]'>
        Doctor Specialist
      </p>
      <h2 className='font-semibold text-[32px] capitalize mt-1'>
        Our experienced & trusted specialist doctors are ready to help patients
      </h2>
      <p className='text-[#8A8A8A] mt-3'>
        Lorem Ipsum is simply dummy text of the printing typesetting industry.
      </p>
      <div className='mt-8 grid grid-cols-2 grid-rows-2 gap-y-6'>
        {specialistAmount.map((item) => (
          <div>
            <h5 className='font-semibold text-2xl'>{item.amount}</h5>
            <p className='text-[#8A8A8A]'>{item.type}</p>
          </div>
        ))}
      </div>
      <div className='flex mt-8'>
        <button className='h-[48px] bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl py-3 px-8 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500'>
          Choose Specialist
        </button>
        <button className='text-[#0C64DC] font-medium py-3 px-8'>
          View All Specialist
        </button>
      </div>
    </div>
  )
}
export default SpecialistCaption
