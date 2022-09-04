import ReasonCaption from './ReasonCaption'
import ReasonImage from './ReasonImage'

function Reason() {
  return (
    <section
      id='reason'
      className='flex flex-col justify-center gap-20 pt-32 lg:flex-row'
    >
      <ReasonImage />
      <ReasonCaption />
    </section>
  )
}
export default Reason
