import ReasonCaption from './ReasonCaption'
import ReasonImage from './ReasonImage'

function Reason() {
  return (
    <section id='reason' className='mt-32 flex justify-center gap-20'>
      <ReasonImage />
      <ReasonCaption />
    </section>
  )
}
export default Reason
