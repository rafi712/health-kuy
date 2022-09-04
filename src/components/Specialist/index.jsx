import SpecialistCaption from './SpecialistCaption'
import SpecialistTiles from './SpecialistTiles'

const Specialist = () => {
  return (
    <section id='pharmacy' className='pt-32'>
      <div className=' flex flex-col gap-14 rounded-xl bg-white p-6 lg:flex-row lg:justify-between lg:p-14'>
        <SpecialistTiles />
        <SpecialistCaption />
      </div>
    </section>
  )
}
export default Specialist
