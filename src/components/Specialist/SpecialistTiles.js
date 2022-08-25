import { doctors } from '../../utils/data'

const SpecialistTiles = () => {
  return (
    <div className='grid gap-8 grid-cols-2 grid-rows-2'>
      {doctors.map((doctor) => (
        <div className='hover:outline hover:outline-4 group hover:outline-blue-600  rounded-3xl overflow-hidden'>
          <img
            src={doctor.image}
            className='rounded-3xl group-hover:scale-95 transition duration-300'
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
