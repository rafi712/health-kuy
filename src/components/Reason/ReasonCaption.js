import ReasonTile from './ReasonTile'
import { reasons } from '../../utils/data'

const ReasonCaption = () => {
  return (
    <div>
      <p className='text-[18px] font-medium text-[#0C64DC]'>
        Our Extra Services
      </p>
      <h2 className='mt-1 text-[32px] font-semibold capitalize'>
        3 reasons why you should <br /> choose our services
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
