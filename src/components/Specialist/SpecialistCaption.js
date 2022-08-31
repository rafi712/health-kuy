import { specialistAmount } from '../../utils/data'

const SpecialistCaption = () => {
  return (
    <div className='ml-16 flex-1'>
      <p className='text-[18px] font-medium text-[#0C64DC]'>
        Doctor Specialist
      </p>
      <h2 className='mt-1 text-[32px] font-semibold capitalize'>
        Our experienced & trusted specialist doctors are ready to help patients
      </h2>
      <p className='mt-3 text-[#8A8A8A]'>
        Lorem Ipsum is simply dummy text of the printing typesetting industry.
      </p>
      <div className='mt-8 grid grid-cols-2 grid-rows-2 gap-y-6'>
        {specialistAmount.map((item) => (
          <div>
            <h5 className='text-2xl font-semibold'>{item.amount}</h5>
            <p className='text-[#8A8A8A]'>{item.type}</p>
          </div>
        ))}
      </div>
      <div className='mt-8 flex'>
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
