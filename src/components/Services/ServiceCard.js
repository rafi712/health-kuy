import Arrow from '../../assets/icons/right-arrow.svg'

const ServiceCard = ({ icon, title }) => {
  return (
    <div className='bg-white p-6 rounded-xl flex-1'>
      <img src={icon} alt='icon' height={52} width={52} />
      <h4 className='font-semibold mt-6'>{title}</h4>
      <p className='text-[#8A8A8A] mt-1 min-h-[130px]'>
        Lorem Ipsum is simply dummy text of the printing typesetting industry.
      </p>
      <a
        href='/'
        className='inline-flex font-medium text-[#EB7530] cursor-pointer group'
      >
        Read Details
        <img
          src={Arrow}
          alt='right arrow'
          className='ml-3 group-hover:translate-x-1 transition ease-in-out'
        />
      </a>
    </div>
  )
}
export default ServiceCard
