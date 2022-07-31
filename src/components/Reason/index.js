import ReasonCaption from './ReasonCaption'
import ReasonImage from './ReasonImage'

function Reason() {
  return (
    <section id='reason' className='mt-32 flex gap-20 justify-center'>
      <ReasonImage />
      <ReasonCaption />
    </section>
  )
}
export default Reason
