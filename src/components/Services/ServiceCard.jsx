import Arrow from '../../assets/icons/right-arrow.svg'

const ServiceCard = ({ icon, title }) => {
  return (
    <div className='flex-1 rounded-xl bg-white p-6'>
      <img src={icon} alt='icon' height={52} width={52} />
      <h4 className='mt-6 font-semibold'>{title}</h4>
      <p className='mt-1 min-h-[130px] text-[#8A8A8A]'>
        Lorem Ipsum is simply dummy text of the printing typesetting industry.
      </p>
      <a
        href='#'
        className='group inline-flex cursor-pointer font-medium text-[#EB7530]'
      >
        Read Details
        <img
          src={Arrow}
          alt='right arrow'
          className='ml-3 transition ease-in-out group-hover:translate-x-1'
        />
      </a>
    </div>
  )
}
export default ServiceCard
