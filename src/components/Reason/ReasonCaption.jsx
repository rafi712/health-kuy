import ReasonTile from './ReasonTile'
import { reasons } from '../../utils/data'

const ReasonCaption = () => {
  return (
    <div>
      <p className='blue-section-title'>Our Extra Services</p>
      <h2 className='black-section-title mt-1 capitalize'>
        3 reasons why you should <br className='hidden lg:block' /> choose our
        services
      </h2>
      <div className='mt-8'>
        {reasons.map((reason) => (
          <ReasonTile icon={reason.icon} title={reason.title} />
        ))}
      </div>
    </div>
  )
}
export default ReasonCaption
