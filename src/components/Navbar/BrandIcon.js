import Icon from '../../assets/icons/brand-icon.svg'

const BrandIcon = () => {
  return (
    <a href='/'>
      <div className='flex'>
        <img src={Icon} alt='icon' />
        <p className='pl-3 text-2xl font-bold text-[#232631]'>HealthKuy</p>
      </div>
    </a>
  )
}
export default BrandIcon
