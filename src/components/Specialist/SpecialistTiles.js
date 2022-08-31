import { doctors } from '../../utils/data'

const SpecialistTiles = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-8'>
      {doctors.map((doctor) => (
        <div className='group overflow-hidden rounded-3xl hover:outline hover:outline-4 hover:outline-blue-600'>
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
