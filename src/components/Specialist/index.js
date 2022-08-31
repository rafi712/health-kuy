import SpecialistCaption from './SpecialistCaption'
import SpecialistTiles from './SpecialistTiles'

const Specialist = () => {
  return (
    <section
      id='pharmacy'
      className='mt-32 flex justify-between rounded-xl bg-white p-14'
    >
      <SpecialistTiles />
      <SpecialistCaption />
    </section>
  )
}
export default Specialist
