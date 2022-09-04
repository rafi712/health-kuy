import { doctors } from '../../utils/data'

const SpecialistTiles = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4 lg:gap-8'>
      {doctors.map((doctor) => (
        <div className='group overflow-hidden rounded-3xl outline-[3px] hover:outline hover:outline-blue-600 lg:hover:outline-4'>
          <img
            src={doctor.image}
            className='rounded-3xl transition duration-300 group-hover:scale-95'
            alt=''
            width={240}
            height={240}
          />
        </div>
      ))}
    </div>
  )
}
export default SpecialistTiles
