import ReasonTile from './ReasonTile'
import ReasonIconPeople from '../../assets/icons/reason-icon-people.svg'
import ReasonIconFast from '../../assets/icons/reason-icon-fast.svg'
import ReasonIconMoney from '../../assets/icons/reason-icon-money.svg'

const ReasonCaption = () => {
  const reasons = [
    { icon: ReasonIconPeople, title: 'no need to queue' },
    { icon: ReasonIconFast, title: 'fast and easy process' },
    { icon: ReasonIconMoney, title: 'price is very Affordable' },
  ]

  return (
    <div>
      <p className='font-medium text-[18px] text-[#0C64DC]'>
        Our Extra Services
      </p>
      <h2 className='font-semibold text-[32px] capitalize mt-1'>
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
