import SpecialistCaption from './SpecialistCaption'
import SpecialistTiles from './SpecialistTiles'

const Specialist = () => {
  return (
    <section
      id='pharmacy'
      className='p-14 mt-32 rounded-xl bg-white flex justify-between'
    >
      <SpecialistTiles />
      <SpecialistCaption />
    </section>
  )
}
export default Specialist
