import { doctors } from '../../utils/data'

const SpecialistTiles = () => {
  return (
    <div className='grid gap-8 grid-cols-2 grid-rows-2'>
      {doctors.map((doctor) => (
        <img
          src={doctor.image}
          className='rounded-3xl'
          alt=''
          width={240}
          height={240}
        />
      ))}
    </div>
  )
}
export default SpecialistTiles
