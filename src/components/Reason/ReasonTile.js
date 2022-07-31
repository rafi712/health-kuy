const ReasonTile = ({ icon, title }) => {
  return (
    <div className='bg-white py-6 px-8 rounded-xl flex gap-5 items-start mb-6'>
      <img src={icon} alt='' width={52} height={52} />
      <div>
        <h4 className='capitalize font-semibold'>{title}</h4>
        <p className='text-[#8A8A8A] mt-1'>
          Lorem Ipsum is simply dummy text <br /> of the printing typesetting
          industry.
        </p>
      </div>
    </div>
  )
}
export default ReasonTile
